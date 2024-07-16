import AbstractSubscriber from "./AbstractSubscriber";

/**
 * This subscriber handles graphics related events from the shared memory
 */
export default class SMPhysicsSubscriber extends AbstractSubscriber {
    trigger(data) {
        return data;
    }
}