import WebSocket from 'ws';
import { nanoid } from 'nanoid';
import initialState from './initialState.mjs';
import newName from './randomName/randomName.mjs';

const version = "^3.0.0";
const server = new WebSocket.Server({ port: 8080 });
const clients = server.clients;
const teams = new Map();

server.on('connection', (client) => {
    client.id = nanoid();
    client.name = newName();

    console.log("New client :", client.name);
    client.send(JSON.stringify({
        type: "version",
        value: version
    }));

    client.on('message', (stringData) => {
        const data = JSON.parse(stringData);
        console.log(data);

        switch (data.type) {
            case 'username':
                const oldName = client.name;

                if (data.value)
                    client.name = data.value;
                else
                    client.name = newName();

                console.log(oldName, "is now", client.name)
                break;

            case 'user_team':
                if (!teams.has(data.value)) {
                    console.log("Creating team :", data.value)
                    teams.set(data.value, new Set());

                    // Initialize the team history
                    const team = teams.get(data.value);
                    team.current = { ...initialState };
                    team.name = data.value;
                }

                const team = teams.get(data.value);
                team.add(client);
                client.team = team;
                client.send(JSON.stringify({
                    type: "fullUpdate",
                    value: team.current
                }))
                break;

            case 'leave_team':
                leaveTeam(client);
                break;

            case 'update':
                client.team.current = {
                    ...client.team.current,
                    ...data.value
                }
                client.team.forEach(teammate => {
                    teammate.send(stringData);
                })
                break;
        }
    })

    client.on('close', () => {
        console.log("Client closed socket.");
        leaveTeam(client);
    })
})

const leaveTeam = (client) => {
    if (!client.team)
        return

    client.team.delete(client);
    if (client.team.size < 1)
        teams.delete(client.team.name);
    client.team = null;
}

console.log("Server up");