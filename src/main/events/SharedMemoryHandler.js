import ACCNW from "acc-node-wrapper";
import dispatcher from "./dispatcher";

export default class SharedMemoryHandler {
    constructor(options = {
        physicsUpdateInterval: 100,
        graphicsUpdateInterval: 1000,
        staticUpdateInterval: 60000,
        logging: false
    }, initBroadcast = false) {

        this.wrapper = new ACCNW();
        this.wrapper.initSharedMemory(...Object.values(options));

        this.enable = false;

        initBroadcast && this.wrapper.initBroadcastSDK("Max", "127.0.0.1", 9000, "123", "123", 1000, true);
    }

    init() {
        this.initGraphics();
        this.initPhysics();
        this.initStatic();
    }

    initPhysics() {
        this.wrapper.on('M_PHYSICS_RESULT', result => {
            this.enable && dispatcher.fire('SMPhysics', result);
        })
    }

    initGraphics() {
        this.wrapper.on('M_GRAPHICS_RESULT', result => {
            // Disable processing for spectators
            this.enable = result.ACC_STATUS === "AC_LIVE";
            this.enable && dispatcher.fire('SMGraphics', result);
        })
    }

    initStatic() {
        this.wrapper.on('M_STATIC_RESULT', result => {
            this.enable && dispatcher.fire('SMStatic', result);
        })
    }
}