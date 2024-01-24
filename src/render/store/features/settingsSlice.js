import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
	name: "settings",
	initialState: {
		username: localStorage.getItem("username") || null,
		timeFormat: localStorage.getItem("time-format") || 24,
		speedUnit: localStorage.getItem("speed-unit") || "kph",
		sendingRate: localStorage.getItem("sending-rate") || 100,
	},
	reducers: {
		changeName: (state, action) => {
			state.username = action.payload;
		},
		changeTimeFormat: (state, action) => {
			state.timeFormat = action.payload;
		},
		changeSpeedUnit: (state, action) => {
			state.speedUnit = action.payload;
		},
		changeSendingRate: (state, action) => {
			state.sendingRate = action.payload;
		},
	},
});

export const {
	changeName,
	changeTimeFormat,
	changeSpeedUnit,
	changeSendingRate,
} = settingsSlice.actions;

export default settingsSlice.reducer;
