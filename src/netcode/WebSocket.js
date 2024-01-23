import WebSocket from 'ws'

export default class WebSocketManager {
    constructor(mainWindow) {
        if (WebSocketManager.exists)
            return WebSocketManager.instance;

        WebSocketManager.exists = true;
        WebSocketManager.instance = this;

        this.isAlive = false;
        this.deadDelay = 1000;
        this._link = null;
        this.mainWindow = mainWindow;

        this.aliveLoop();
    }

    aliveLoop() {
        const connect = () => {
            if (this.isAlive)
                return;
            // Make sure the eventual current WebSocket is destroyed
            this._link?.terminate();

            console.log("Trying to establish connection.");
            this.handshake();
            this.initHandles();
        };
        setInterval(connect, this.deadDelay);
    }

    handshake() {
        const serverAddress = 'ws://localhost:8080';
        console.log("Creating socket.")
        this._link = new WebSocket(serverAddress, 'receiver');
    }

    initHandles() {
        // This avoids the ugly pop-up message when server in unreachable
        this.on('error', () => {
            console.log('Server unreachable.')
        });

        this.on('open', () => {
            console.log("Connection established.");
            this.isAlive = true;
            this.mainWindow.webContents.send("WSState", true);
        })

        this.on('message', (data) => {
            console.log("Oh, j'ai reçu", data);
        })

        this.on('close', () => {
            console.log('Connection closed. Attempting to reconnect.');
            this.isAlive = false;
            this.mainWindow.webContents.send("WSState", false);
        })
    }

    on(event, callback) {
        this._link.on(event, callback)
    }

    send(data) {
        const stringData = JSON.stringify(data);
        this._link.send(stringData);
    }
}