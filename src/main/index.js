import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { WebSocketWrapper } from "./netcode/WebSocket";
import data from "./data-sample.json";
import SharedMemoryHandler from "./events/SharedMemoryHandler.js";
import MainWindowSubscriber from "./events/subscribers/MainWindowSubscriber.js";
import WebSocketSubscriber from "./events/subscribers/WebSocketSubscriber.js";
import { UserInHandler } from "./events/userInputsHandler.js";
import SMGraphicsSubscriber from "./events/subscribers/SMGraphicsSubscriber.js";
import SMPhysicsSubscriber from "./events/subscribers/SMPhysicsSubscriber.js";
import SMStaticSubscriber from "./events/subscribers/SMStaticSubscriber.js";

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
		width: 620,
		height: 1000,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
  
  // Initialize the event handler for the main window
	const windowSubscriber = new MainWindowSubscriber(mainWindow);
	windowSubscriber.subscribe(['WSState', 'fullUpdate']);

	// Initialize the event handler for the WebSocket input
	const WSSubscriber = new WebSocketSubscriber();
	WSSubscriber.subscribe('data');

	// Start WebSocket connection
	WebSocketWrapper.initAliveLoop();

	// Initialize user listeners
	UserInHandler.init();

	// Open the DevTools.
	// mainWindow.webContents.openDevTools();

	// Start connection to the game's shared memory
	const sharedMemory = new SharedMemoryHandler();
	sharedMemory.init();

	const graphicsSubscriber = new SMGraphicsSubscriber();
	graphicsSubscriber.subscribe('SMGraphics');
	const physicsSubscriber = new SMPhysicsSubscriber();
	physicsSubscriber.subscribe('SMPhysics');
	const staticSubscriber = new SMStaticSubscriber();
	staticSubscriber.subscribe('SMStatic');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
