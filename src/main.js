import { app, BrowserWindow } from "electron";
import { WebSocketWrapper } from "./netcode/WebSocket";
import data from "../data-sample.json";
import SharedMemoryHandler from "./SharedMemoryAccess/SharedMemoryHandler";
import MainWindowSubscriber from "./events/subscribers/MainWindowSubscriber.js";
import WebSocketSubscriber from "./events/subscribers/WebSocketSubscriber.js";
import { UserInHandler } from "./events/userInputsHandler.js";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
	app.quit();
}

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 620,
		height: 1000,
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});
	// and load the index.html of the app.
	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

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
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	try { createWindow(); }
	catch (err) { console.error(err) }

	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	app.on("activate", function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
