import dispatcher from "../dispatcher"

export default class AbstractSubscriber {
    constructor(mainWindow) {
        this.mainWindow = mainWindow;
    }
    trigger() {
        throw new Error('Trigger is not defined.')
    }
    subscribe(channel) {
        dispatcher.addSubscriber(channel, this);
    }
}