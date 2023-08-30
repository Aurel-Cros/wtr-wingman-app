// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('settings', {
    setUsername: (callback) => ipcRenderer.send('setUsername', callback)
})

contextBridge.exposeInMainWorld('dataAPI', {
    onTeleData: (callback) => ipcRenderer.on('telemetry', callback),
    onWeatherData: (callback) => ipcRenderer.on('weather', callback)
})