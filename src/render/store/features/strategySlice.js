import {createSlice} from "@reduxjs/toolkit";

export const strategySlice = createSlice({
	name: "strategy",
	initialState: {
		racingTimers: {
			stintRemaining: 0,
			bestLap: 0,
			currentLap: 0,
			currentPred: 0,
			deltaToBest: 0,
			gapToFront: 0,
			gapToBehind: 0,
		},
		fuel: {
			usedThisStint: 0,
			remaining: 0,
			perLap: 0,
		},
		tyres: {
			lastPitValues: [0, 0, 0, 0], // in psi*10 : 259 for 25.9 psi
		},
	},
	reducers: {},
});

export const strategyActions = strategySlice.actions;

export default strategySlice.reducer;
