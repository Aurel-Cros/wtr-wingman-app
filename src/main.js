const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const data = require('../data-sample.json');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 1000,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        },
    });
    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    ipcMain.on('setUsername', (_event, name) => {
        console.log('Username: ', name);
    })
    ipcMain.on('setGroupName', (_event, name) => {
        if (name)
            console.log('Group name: ', name);
        else
            console.log('Quit group !')
    })

    setInterval(() => {
        const weather = {
            Clock: data.graphics.Clock,
            rainIntensity: data.graphics.rainIntensity,
            rainIntensityIn10min: data.graphics.rainIntensityIn10min,
            rainIntensityIn30min: data.graphics.rainIntensityIn30min,
            windDirection: data.graphics.windDirection,
            windSpeed: data.graphics.windSpeed,
            airTemp: data.physics.airTemp + Math.floor(Math.random() * 10),
            roadTemp: data.physics.roadTemp + Math.floor(Math.random() * 10),
            trackStatus: data.graphics.trackStatus.join('').toLowerCase(),
            currentTyreSet: data.graphics.currentTyreSet,
            rainTyres: data.graphics.rainTyres
        }
        mainWindow.webContents.send('weather', weather);
    }, 5000);

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
