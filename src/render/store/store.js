import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "./features/settingsSlice";
import weatherReducer from "./features/weatherSlice";
import infoReducer from "./features/infoSlice";
import strategyReducer from "./features/strategySlice";
import telemetryReducer from "./features/telemetrySlice";

export default configureStore({
	reducer: {
		settings: settingsReducer,
		info: infoReducer,
		weather: weatherReducer,
		strategy: strategyReducer,
		telemetry: telemetryReducer,
	},
});
