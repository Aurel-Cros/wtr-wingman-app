import WebSocket from 'ws';
import { nanoid } from 'nanoid';

const version = "^3.0.0";
const server = new WebSocket.Server({ port: 8080 });
const clients = server.clients;
const teams = new Map();

server.on('connection', (client) => {
    client.id = nanoid();
    console.log("New client : ", client.id);
    client.send(JSON.stringify({
        type: "version",
        value: version
    }));

    client.on('message', (stringData) => {
        const data = JSON.parse(stringData);
        console.log(data);

        switch (data.type) {
            case 'username':
                client.name = data.value;
                break;

            case 'user_team':
                if (!teams.has(data.value)) {
                    console.log("Creating team", data.value)
                    teams.set(data.value, new Set());
                }

                const team = teams.get(data.value);
                team.add(client);
                client.team = {
                    name: data.value,
                    users: team
                };
                break;

            case 'leave_team':
                client.team.users.delete(client);
                if (client.team.users.size < 1)
                    teams.delete(client.team.name);
                client.team = null;
                break;

            case 'data':
                clients.forEach(aClient => {
                    aClient.send(stringData);
                })
                break;
        }
    })

    client.on('close', () => {
        console.log("Client closed socket.");
    })
})

console.log("Server up");