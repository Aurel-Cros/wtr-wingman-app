import AbstractSubscriber from "./AbstractSubscriber";

/**
 * This subscriber handles events that involve data received from the server.
 * As the data going through the WebSocket can only be a string, the action integrates a JSON.parse()
 */
export default class DataSubscriber extends AbstractSubscriber {
    trigger(action) {

        const data = action.value;
        console.log(action);

        switch (action.type) {
            case "version":
                console.log("Version du serveur :", data);
                break;

            case "update":
                // this.mainWindow.webContents.send(data.channel, data);
                break;

            case "fullUpdate":
                // this.mainWindow.webContents.send('fullUpdate', data);
                console.log("Full update received.")
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