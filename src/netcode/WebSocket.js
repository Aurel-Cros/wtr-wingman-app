import WebSocket from 'ws'
import onData from './onData';
import dispatcher from '../events/dispatcher';
import { WSStateAction } from '../events/subscribers/MainWindowSubscriber';

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

        this.on('message', onData.bind(this));
    }

    on(event, callback) {
        this._link.on(event, callback)
    }

    send(data) {
        const stringData = JSON.stringify(data);
        this._link.send(stringData);
    }
}