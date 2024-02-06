import { WebSocketWrapper } from "../netcode/WebSocket";
import dispatcher from "./dispatcher";
import { ipcMain } from "electron";

class UserInputsHandler {

    /**
     * Initialize user listeners
     */
    init() {
        ipcMain.on("setUsername", (_event, name) => {
            const payload = {
                type: "username",
                value: name
            };
            WebSocketWrapper.send(payload);
        });

        ipcMain.on("setTeamName", (_event, name) => {
            if (name) {
                const payload = {
                    type: "user_team",
                    value: name
                };
                WebSocketWrapper.send(payload);
            }
            else {
                const payload = {
                    type: "leave_team"
                };
                WebSocketWrapper.send(payload);
            }
        });
    }
}
export const UserInHandler = new UserInputsHandler();