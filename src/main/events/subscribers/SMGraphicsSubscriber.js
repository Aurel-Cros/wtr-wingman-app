import AbstractSubscriber from "./AbstractSubscriber";

/**
 * This subscriber handles graphics related events from the shared memory
 */
export default class SMGraphicsSubscriber extends AbstractSubscriber {
    constructor() {
        super();
        this.state = {};
    }

    trigger(data) {
        if (this.compare(data))
            return;
    }

    compare(data) {
        if (Object.values(data) === Object.values(this.state))
            return true;

        return false;
    }
}