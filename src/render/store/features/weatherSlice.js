import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
	name: "weather",
	initialState: [],
	reducers: {
		addWeatherEvent: (state, action) => {
			state.weather.push(action.payload.weatherEvent);
		},
	},
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
