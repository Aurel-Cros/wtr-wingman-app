import WebSocket from 'ws'

export default class WebSocketManager {
    constructor() {
        if (WebSocketManager.exists)
            return WebSocketManager.instance;

        WebSocketManager.exists = true;
        WebSocketManager.instance = this;

        this.handshake() && this.initHandles();
    }

    handshake() {
        try {
            const serverAddress = 'wss://localhost:8080';
            this._link = new WebSocket(serverAddress, 'receiver');
            return true
        }
        catch (err) {
            console.log("Connection failure.", err);
        }
    }

    initHandles() {
        this._link.on('open', () => {
            this._link.send('Coucou serveur !');
        })

        this._link.on('message', (data) => {
            console.log("Oh, j'ai reçu", data);
        })

        this._link.on('close', () => {
            console.log('Logging out');
        })
    }

    on(event, callback) {
        this._link.on(event, callback)
    }

    send(myString) {
        this._link.send(myString);
    }
}