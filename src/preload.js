// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('settings', {
    setUsername: (callback) => ipcRenderer.send('setUsername', callback),
    setGroupName: (callback) => ipcRenderer.send('setGroupName', callback)
})

const dataChannels = [
    'telemetry',
    'weather'
]
contextBridge.exposeInMainWorld('dataAPI', {
    onTeleData: (callback) => ipcRenderer.on(dataChannels[0], callback),
    onWeatherData: (callback) => ipcRenderer.on(dataChannels[1], callback),
    clear: (channels = []) => channels.forEach(channel => {
        if (dataChannels.includes(channel))
            ipcRenderer.removeAllListeners(channel)
    })
})