import AbstractSubscriber from "./AbstractSubscriber";

/**
 * This subscriber handles graphics related events from the shared memory
 */
export default class SMStaticSubscriber extends AbstractSubscriber {
    trigger(data) {
        return data;
    }
}