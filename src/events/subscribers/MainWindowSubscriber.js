import AbstractSubscriber from "./AbstractSubscriber";

export default class MainWindowSubscriber extends AbstractSubscriber {
    constructor(mainWindow) {
        super(mainWindow);
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