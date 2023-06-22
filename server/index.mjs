import WebSocket from 'ws'

const server = new WebSocket.Server({ port: 8080 });
const clients = server.clients;

server.on('connection', (client) => {
    client.id = clients.size - 1;
    console.log("New client", client.id);

    console.log(clients.has(client))

    client.send("Coucou client :)");

    client.on('message', data => {
        console.log(`Oh, le client ${client.id} m'a envoyé ${data}`)
        clients.forEach(aClient => {
            aClient.send(`${client.id} has sent ${data}`)
        })
    })
})

console.log("Server up");