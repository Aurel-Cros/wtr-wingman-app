import AbstractSubscriber from "./AbstractSubscriber";

/**
 * This subscriber handles events that require an action from the mainWindow,
 * namely sending data to the vue through mainWindow.webContents.
 */
export default class MainWindowSubscriber extends AbstractSubscriber {
    constructor(mainWindow) {
        super();
        this.mainWindow = mainWindow;
    }
    trigger(action) {
        switch (action.type) {
            case 'WSState':
                this.mainWindow.webContents.send('WSState', action.value);
                break;
        }
    }
}

export const { WSStateAction } = {
    WSStateAction: (value) => ({ type: 'WSState', value: value })
}