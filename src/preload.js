// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("settings", {
	setUsername: (callback) => ipcRenderer.send("setUsername", callback),
	setGroupName: (callback) => ipcRenderer.send("setGroupName", callback),
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
	"tyresLive", // 10
];
contextBridge.exposeInMainWorld("dataAPI", {
	onTimeSync: (callback) => ipcRenderer.on(dataChannels[0], callback),
	onWeatherEvent: (callback) => ipcRenderer.on(dataChannels[1], callback),
	onWeatherLiveData: (callback) => ipcRenderer.on(dataChannels[2], callback),
	OnTeleElectronics: (callback) => ipcRenderer.on(dataChannels[3], callback),
	onTeleData: (callback) => ipcRenderer.on(dataChannels[4], callback),
	clear: (channels = []) =>
		channels.forEach((channel) => {
			if (dataChannels.includes(channel))
				ipcRenderer.removeAllListeners(channel);
		}),
});
