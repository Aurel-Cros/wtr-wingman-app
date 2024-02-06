import dispatcher from "../dispatcher";
import AbstractSubscriber from "./AbstractSubscriber";
import { fullUpdateAction } from "./MainWindowSubscriber";

/**
 * This subscriber handles events that involve data received from the server.
 * As the data going through the WebSocket can only be a string, the action integrates a JSON.parse()
 */
export default class WebSocketSubscriber extends AbstractSubscriber {
    trigger(action) {

        const data = action.value;

        switch (action.type) {
            case "version":
                console.log("Version du serveur :", data);
                break;

            case "update":
                console.log("Partial update received.")
                dispatcher.fire('update', updateAction(data));
                break;

            case "fullUpdate":
                console.log("Full update received.")
                dispatcher.fire('fullUpdate', fullUpdateAction(data));
                break;

            default:
                console.log("Unknown data received");
                break;
        }
    }
}
export const { DataAction } = {
    /**
     * @param string in JSON format contaning the action type and value
     * @returns Object containing the type and value of the action
     */
    DataAction: (stringData) => JSON.parse(stringData)
}