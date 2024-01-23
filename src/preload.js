// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("settings", {
	setUsername: callback => ipcRenderer.send("setUsername", callback),
	setGroupName: callback => ipcRenderer.send("setGroupName", callback),
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
];
contextBridge.exposeInMainWorld("dataAPI", {
	onTimeSync: callback => ipcRenderer.on(dataChannels[0], callback),
	onWeatherEvent: callback => ipcRenderer.on(dataChannels[1], callback),
	onWeatherLiveData: callback => ipcRenderer.on(dataChannels[2], callback),
	onTeleElectronics: callback => ipcRenderer.on(dataChannels[3], callback),
	onTeleData: callback => ipcRenderer.on(dataChannels[4], callback),
	onTimingSync: callback => ipcRenderer.on(dataChannels[5], callback),
	onTimingLive: callback => ipcRenderer.on(dataChannels[6], callback),
	onPitSync: callback => ipcRenderer.on(dataChannels[7], callback),
	onFuelSync: callback => ipcRenderer.on(dataChannels[8], callback),
	onTyresSync: callback => ipcRenderer.on(dataChannels[9], callback),
	clear: (channels = dataChannels) =>
		channels.forEach(channel => {
			if (dataChannels.includes(channel)) ipcRenderer.removeAllListeners(channel);
		}),
});
