import WebSocket from 'ws'
import { DataAction } from '../events/subscribers/DataSubscriber';
import dispatcher from '../events/dispatcher';
import { WSStateAction } from '../events/subscribers/MainWindowSubscriber';

/**
 * This handles the WebSocket connection.
 * It initiates the connection and its event listeners.
 * It makes sure the connection is always alive and recreates it when it dies.
 */
export default class WebSocketManager {
    constructor() {
        if (WebSocketManager.exists)
            return WebSocketManager.instance;

        WebSocketManager.exists = true;
        WebSocketManager.instance = this;

        this.isAlive = false;
        this.deadDelay = 1000;
        this._link = null;

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
            dispatcher.fire('WSState', WSStateAction(true));
        })

        this.on('close', () => {
            console.log('Connection closed. Attempting to reconnect.');
            this.isAlive = false;
            dispatcher.fire('WSState', WSStateAction(false));
        })

        this.on('message', stringData => {

            dispatcher.fire('data', DataAction(stringData))
        });
    }

    on(event, callback) {
        this._link.on(event, callback)
    }

    send(data) {
        const stringData = JSON.stringify(data);
        this._link.send(stringData);
    }
}