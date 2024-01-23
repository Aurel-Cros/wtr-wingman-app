import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const telemetrySlice = createSlice({
	name: "telemetry",
	initialState: {
		...initialState.telemetry
	},
	reducers: {
		updatePressures: (state, { payload }) => {
			state.tyres.livePressures = payload.pressures;
			state.tyres.pressuresHistory.push({ pressures: payload.pressures, timestamp: payload.timestamp });
			const avg = state.tyres.pressuresHistory
				.reduce(
					(avg, curr, i) => {
						let duration;
						if (i + 1 >= state.tyres.pressuresHistory.length) duration = 1;
						else duration = state.tyres.pressuresHistory[i + 1].timestamp - curr.timestamp;

						avg[0] += curr.pressures[0] * duration;
						avg[1] += curr.pressures[1] * duration;
						avg[2] += curr.pressures[2] * duration;
						avg[3] += curr.pressures[3] * duration;

						return avg;
					},
					[0, 0, 0, 0]
				)
				.map(a => (a / state.tyres.pressuresHistory.length).toFixed(0));
			state.tyres.avgPressuresDuringStint = avg;
		},
		resetAverage: state => {
			state.tyres.avgPressuresDuringStint = [0, 0, 0, 0];
			state.tyres.pressuresHistory = [];
		},
		updateElectronics: (state, { payload }) => {
			state.electronics = {
				...state.electronics,
				...payload,
			};
		},
		updateLiveData: (state, { payload }) => {
			state.tyres = { ...state.tyres, ...payload.tyres };
			state.brakes = { ...state.brakes, ...payload.brakes };
		},
	},
});

export const telemetryActions = telemetrySlice.actions;

export default telemetrySlice.reducer;
