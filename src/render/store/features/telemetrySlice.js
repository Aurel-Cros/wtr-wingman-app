import {createSlice} from "@reduxjs/toolkit";

export const telemetrySlice = createSlice({
	name: "telemetry",
	initialState: {
		electronics: {
			tc: 0,
			tc2: 0,
			abs: 0,
			bbias: 0,
			emap: 0,
		},
		brakes: {
			life: {
				pads: 0,
				discs: 0,
			},
			temps: [0, 0, 0, 0],
		},
		tyres: {
			type: null,
			currentSet: null,
			rainTyres: null,
			age: 0,
			livePressures: [0, 0, 0, 0],
			avgPressuresDuringStint: [0, 0, 0, 0],
			wear: [0, 0, 0, 0],
			coreT: [0, 0, 0, 0],
			slipAngle: [0, 0, 0, 0],
			slipRatio: [0, 0, 0, 0],
		},
	},
	reducers: {
		updateElectronics: (state, action) => {
			state.telemetry.electronics = {
				...state.telemetry.electronics,
				...action.payload,
			};
		},
	},
});

export const telemetryActions = telemetrySlice.actions;

export default telemetrySlice.reducer;
