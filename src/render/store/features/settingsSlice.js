import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const settingsSlice = createSlice({
	name: "settings",
	initialState: {
		...initialState.settings
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
