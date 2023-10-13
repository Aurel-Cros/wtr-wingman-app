import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		info: {
			duration: 0,
			currentTime: 0,
			lastUpdate: 0,
		},
		timings: {},
		telemetry: {
			electronics: {
				tc: 0,
				tc2: 0,
				abs: 0,
				bbias: 0,
				emap: 0,
            },
            brakesLife: {
                pads: 0,
                discs: 0
            }
		},
		weather: [],
		strategy: {},
		car: {},
	},
	reducers: {
		setDuration: (state, action) => {
			state.info.duration = action.payload;
		},
		updateCurrentTime: (state, action) => {
			state.info.currentTime = action.payload;
		},
		addWeatherEvent: (state, action) => {
			state.weather.push(action.payload.weatherEvent);
			state.info.lastUpdate = action.payload.timestamp;
		},
		updateElectronics: (state, action) => {
			state.telemetry.electronics = {
				...state.telemetry.electronics,
				...action.payload,
			};
		},
	},
});

export const dataActions = settingsSlice.actions;

export default settingsSlice.reducer;
