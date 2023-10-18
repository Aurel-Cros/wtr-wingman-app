import { createSlice } from "@reduxjs/toolkit";

export const strategySlice = createSlice({
	name: "strategy",
	initialState: {
		flag: "AC_NO_FLAG",
		racingTimers: {
			stintRemaining: 0,
			bestLap: 0,
			previousLap: 0,
			currentLap: 0,
			currentPred: 0,
			deltaToBest: 0,
			gapToFront: 0,
			gapToBehind: 0,
		},
		pitMenu: {
			damage: 0,
			repairTime: 0,
			repairBody: false,
			repairSuspension: false,
			tyres: {
				change: true,
				selectedType: "Wet",
				pressures: [270, 270, 270, 270],
			},
			fuelToAdd: 120,
			changeBrakes: false,
			penaltyTime: 0,
		},
		fuel: {
			tankSize: 120,
			usedThisStint: 60,
			remaining: 60,
			perLap: 3,
		},
		tyres: {
			lastPitValues: [260, 250, 260, 250],
			// in psi*10 : 259 for 25.9 psi
		},
	},
	reducers: {
		updateFlag: (state, { payload }) => {
			state.flag = payload;
		},
		updateRacingTimers: (state, { payload }) => {
			state.racingTimers = {
				...state.racingTimers,
				...payload,
			};
		},
		updatePitMenu: (state, { payload }) => {
			state.pitMenu = {
				...state.pitMenu,
				...payload,
			};
		},
		updateFuel: (state, { payload }) => {
			state.fuel = {
				...state.fuel,
				...payload,
			};
		},
		updatePreviousPitValues: (state, { payload }) => {
			state.tyres.lastPitValues = payload;
		},
	},
});

export const strategyActions = strategySlice.actions;

export default strategySlice.reducer;
