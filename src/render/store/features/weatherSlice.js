import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		...initialState.weather
	},
	reducers: {
		addWeatherEvent: (state, action) => {
			const events = [...state.events, action.payload];
			state.events = events.toSorted((a, b) => b.timeLeft - a.timeLeft);
		},
		updateLiveData: (state, action) => {
			state.liveData = {
				...state.liveData,
				...action.payload,
			};
		},
	},
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
