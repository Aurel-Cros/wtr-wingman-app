class MainDispatcher {
    constructor() {
        if (MainDispatcher.hasInstance)
            return MainDispatcher.instance;
        MainDispatcher.hasInstance = true;
        MainDispatcher.instance = this;

        this.subscribers = {};
    }

    addSubscriber(channel, subscriber) {
        if (!this.subscribers[channel])
            this.subscribers[channel] = [];
        this.subscribers[channel].push(subscriber);
    }

    fire(channel, action) {
        if (!this.subscribers[channel])
            throw new Error('This event channel does not exist.');

        this.subscribers[channel].forEach(subscriber => {
            subscriber.trigger(action);
        });
    }
}

const dispatcher = new MainDispatcher();
export default dispatcher;