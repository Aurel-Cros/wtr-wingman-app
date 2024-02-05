import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const infoSlice = createSlice({
	name: "info",
	initialState: {
		...initialState.info
	},
	reducers: {
		setAll: (state, { payload }) => {
			console.log("Updating info")
			state.drivers = payload.drivers
			state.duration = payload.duration;
			state.currentTime = payload.currentTime;
			state.sessionTimeLeft = payload.sessionTimeLeft;
			state.carModel = payload.carModel;
			state.trackName = payload.trackName;
			state.drivers = payload.drivers;
			state.currentDriverId = payload.currentDriverId;
		},
		setDuration: (state, { payload }) => {
			state.duration = payload;
		},
		updateCurrentTime: (state, { payload }) => {
			state.currentTime = payload;
			console.log('Update current time');
		},
		updateTimeLeft: (state, { payload }) => {
			state.sessionTimeLeft = payload;
		},
		updateReceived: state => {
			state.lastUpdateTime = state.currentTime;
		},
		updateCar: (state, { payload }) => {
			state.carModel = payload;
		},
		updateTrack: (state, { payload }) => {
			state.trackName = payload;
		},
		setDrivers: (state, { payload }) => {
			state.drivers = payload;
		},
		setCurrentDriverId: (state, { payload }) => {
			state.currentDriverId = payload;
		}
	},
});

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;
