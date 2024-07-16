// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("settings", {
	setUsername: callback => ipcRenderer.send("setUsername", callback),
	setTeamName: callback => ipcRenderer.send("setTeamName", callback)
});

contextBridge.exposeInMainWorld("connection", {
	onWSState: callback => ipcRenderer.on("WSState", callback),
});

const dataChannels = [
	"timeSync", // 0
	"weatherEvent",
	"weatherLiveData",
	"telemetryElectronics",
	"telemetryLiveData",
	"timingsSync", // 5
	"timingsLiveData",
	"pitStratSync",
	"fuelSync",
	"tyresSync",
	"fullUpdate" // 10
];
contextBridge.exposeInMainWorld("dataAPI", {
	onTimeSync: callback => ipcRenderer.on(dataChannels[0], (_event, value) => callback(value)),
	onWeatherEvent: callback => ipcRenderer.on(dataChannels[1], (_event, value) => callback(value)),
	onWeatherLiveData: callback => ipcRenderer.on(dataChannels[2], (_event, value) => callback(value)),
	onTeleElectronics: callback => ipcRenderer.on(dataChannels[3], (_event, value) => callback(value)),
	onTeleData: callback => ipcRenderer.on(dataChannels[4], (_event, value) => callback(value)),
	onTimingSync: callback => ipcRenderer.on(dataChannels[5], (_event, value) => callback(value)),
	onTimingLive: callback => ipcRenderer.on(dataChannels[6], (_event, value) => callback(value)),
	onPitSync: callback => ipcRenderer.on(dataChannels[7], (_event, value) => callback(value)),
	onFuelSync: callback => ipcRenderer.on(dataChannels[8], (_event, value) => callback(value)),
	onTyresSync: callback => ipcRenderer.on(dataChannels[9], (_event, value) => callback(value)),
	onFullUpdate: callback => ipcRenderer.on(dataChannels[10], (_event, value) => callback(value)),
	clear: (channels = dataChannels) =>
		channels.forEach(channel => {
			if (dataChannels.includes(channel)) ipcRenderer.removeAllListeners(channel);
		})
});
