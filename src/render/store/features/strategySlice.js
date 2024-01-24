import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const strategySlice = createSlice({
	name: "strategy",
	initialState: {
		...initialState.strategy
	},
	reducers: {
		setAll: (state, { payload }) => {
			state = { ...state, ...payload }
		},
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
