import dispatcher from "../dispatcher"

export default class AbstractSubscriber {
    constructor() {
    }
    trigger() {
        throw new Error('Trigger is not defined.')
    }
    subscribe(channel) {
        dispatcher.addSubscriber(channel, this);
    }
}