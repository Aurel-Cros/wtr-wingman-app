import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const infoSlice = createSlice({
	name: "info",
	initialState: {
		...initialState.info
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
