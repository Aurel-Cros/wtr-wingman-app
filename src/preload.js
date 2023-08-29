// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('settings', {
    setUsername: (callback) => ipcRenderer.send('setUsername', callback)
})

contextBridge.exposeInMainWorld('dataAPI', {
    onData: (callback) => ipcRenderer.on('data', callback)
})