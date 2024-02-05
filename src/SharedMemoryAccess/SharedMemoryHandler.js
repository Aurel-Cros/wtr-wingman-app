import ACCNW from "acc-node-wrapper";

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

    initPhysics(callback) {
        this.wrapper.on('M_PHYSICS_RESULT', result => {
            this.enable && callback(result);
        })
    }

    initGraphics(callback) {
        this.wrapper.on('M_GRAPHICS_RESULT', result => {
            // Disable processing for spectators
            if (result.ACC_STATUS != "AC_LIVE")
                this.enable = false;
            else
                this.enable = true;

            this.enable && callback(result);
        })
    }

    initStatic(callback) {
        this.wrapper.on('M_STATIC_RESULT', result => {
            callback(result);
        })
    }
}