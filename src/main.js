const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const data = require("../data-sample.json");
const ACCNW = require("acc-node-wrapper");
const wrapper = new ACCNW();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
	app.quit();
}

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 1000,
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});
	// and load the index.html of the app.
	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	// Open the DevTools.
	// mainWindow.webContents.openDevTools();

	ipcMain.on("setUsername", (_event, name) => {
		console.log("Username: ", name);
	});
	ipcMain.on("setGroupName", (_event, name) => {
		if (name) console.log("Group name: ", name);
		else console.log("Quit group !");
	});
	/*
	 *   TEMPORARY FAKE DATA
	 *   DATA STRUCTURE IS CORRECT
	 */
	setInterval(() => {
		data.graphics.rainIntensity = data.graphics.rainIntensity === "ACC_NO_RAIN" ? "ACC_LIGHT_RAIN" : "ACC_NO_RAIN";
		const dataUpdate = {
			weather: {
				event: {
					timestamp: Math.trunc(data.graphics.Clock + (Math.random() * 2 < 1 ? 1800 : 600)),
					rainIntensity: data.graphics.rainIntensity,
				},
			},
		};
		mainWindow.webContents.send("weatherEvent", dataUpdate.weather.event);
	}, 5000);
	setInterval(() => {
		data.graphics.ABS += 1
		data.graphics.TC += 1
		data.graphics.TCCUT += 1
		data.graphics.EngineMap += 1
		data.physics.brakeBias += 0.005

		const dataUpdate = {
			telemetry: {
				electronics: {
					tc: data.graphics.TC,
					tc2: data.graphics.TCCUT,
					abs: data.graphics.ABS,
					emap: data.graphics.EngineMap,
					bbias: data.physics.brakeBias.toFixed(2),
				},
			},
		};
		mainWindow.webContents.send("telemetryElectronics", dataUpdate.telemetry.electronics);
	}, 3000);
	setInterval(() => {
		const dataUpdate = {
			telemetry: {
				liveData: {
					tyres: {
						type: "Dry",
						currentSet: 3,
						rainTyres: false,
						age: 24,
						livePressures: [260, 260, 270, 270],
						avgPressuresDuringStint: [260, 260, 270, 270],
						wear: [10, 10, 10, 10],
						coreT: [80, 80, 80, 80],
						slipAngle: [0, 0, 0, 0],
						slipRatio: [0, 0, 0, 0],
					},
					brakes: {
						life: {
							pads: 99,
							discs: 99,
						},
						temps: [500, 500, 400, 400],
					},
				},
			},
		};
		mainWindow.webContents.send("telemetryLiveData", dataUpdate.telemetry.liveData);
	}, 1000);
	setInterval(() => {
		const dataUpdate = {
			weather: {
				liveData: {
					windDirection: data.graphics.windDirection,
					windSpeed: data.graphics.windSpeed,
					airTemp: data.physics.airTemp + Math.floor(Math.random() * 10),
					roadTemp: data.physics.roadTemp + Math.floor(Math.random() * 10),
					trackStatus: data.graphics.trackStatus.join("").toLowerCase(),
				},
			},
		};
		mainWindow.webContents.send("weatherLiveData", dataUpdate.weather.liveData);
	}, 1000);
	setInterval(() => {
		data.graphics.Clock += 60;
		data.graphics.sessionTimeLeft -= 60;
		const timeSync = {
			currentTime: data.graphics.Clock,
			sessionTimeLeft: data.graphics.sessionTimeLeft,
		};
		mainWindow.webContents.send("timeSync", timeSync);
	}, 1000);

	// wrapper.initSharedMemory(10, 1000, 60 * 60 * 1000, false);
	// wrapper.initBroadcastSDK("Max", "127.0.0.1", 9000, "123", "123", 1000, true);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

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
