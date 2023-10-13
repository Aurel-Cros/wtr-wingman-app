import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		events: [],
		liveData: {
			windDirection: 0,
			windSpeed: 0,
			airTemp: 0,
			roadTemp: 0,
			trackStatus: null,
		},
	},
	reducers: {
		addWeatherEvent: (state, action) => {
			const events = [...state.events, action.payload];
			const sortedEvents = events.toSorted(
				(a, b) => a.timestamp - b.timestamp
			);
			state.events = sortedEvents;
		},
		updateLiveData: (state, action) => {
			state.liveData = action.payload;
		},
	},
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
