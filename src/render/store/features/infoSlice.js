import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
	name: "info",
	initialState: {
		duration: -1,
		currentTime: -1,
		sessionTimeLeft: -1,
		lastUpdateTime: -1,
		drivers: [], // [{id: 0, name: 'Driver 1', drivingTimeLeft: 1345}]
		currentDriverId: null,
		carModel: "Car model",
		trackName: "Track name",
	},
	reducers: {
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
		}
	},
});

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;
