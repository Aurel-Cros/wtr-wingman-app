class WebSocketManager {
    constructor() {
        if (WebSocketManager.exists)
            return WebSocketManager.instance;

        WebSocketManager.exists = true;
        WebSocketManager.instance = this;
    }

    handshake() {
        try {
            const serverAddress = 'ws://localhost:8080';
            this._link = new WebSocket(serverAddress, 'receiver');
        }
        catch {
            console.log("Connection failure.");
        }
    }
}