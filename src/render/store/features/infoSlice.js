import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice({
	name: "info",
	initialState: {
		duration: -1,
		currentTime: -1,
		sessionTimeLeft: -1,
		lastUpdate: -1,
		drivers: [], // [{id: 0, name: 'Driver 1', drivingTimeLeft: 1345}]
		currentDriver: null,
		carModel: null,
		track: null,
	},
	reducers: {
		setDuration: (state, action) => {
			state.info.duration = action.payload;
		},
		updateCurrentTime: (state, action) => {
			state.info.currentTime = action.payload;
		},
	},
});

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;
