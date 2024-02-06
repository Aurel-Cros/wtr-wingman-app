import dispatcher from "../dispatcher"

export default class AbstractSubscriber {
    constructor() {
    }
    trigger() {
        throw new Error('Trigger is not defined.')
    }
    subscribe(channel) {
        if (channel instanceof Array)
            channel.forEach(c => dispatcher.addSubscriber(c, this))
        else
            dispatcher.addSubscriber(channel, this);
    }
}