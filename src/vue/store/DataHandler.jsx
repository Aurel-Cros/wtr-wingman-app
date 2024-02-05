import { useDispatch } from "react-redux";
import { weatherActions } from "./features/weatherSlice";
import { infoActions } from "./features/infoSlice";
import { telemetryActions } from "./features/telemetrySlice";
import { strategyActions } from "./features/strategySlice";

export default function DataHandler() {
	console.log("Data handler live");
	const dispatch = useDispatch();

	window.dataAPI.clear();

	window.dataAPI.onFullUpdate(fullState => {
		dispatch(weatherActions.setAll(fullState.weather));
		dispatch(infoActions.setAll(fullState.info));
		dispatch(telemetryActions.setAll(fullState.telemetry));
		dispatch(strategyActions.setAll(fullState.strategy));
		dispatch(infoActions.updateReceived());
	})

	window.dataAPI.onTimeSync(time => {
		dispatch(infoActions.updateCurrentTime(time.currentTime));
		dispatch(infoActions.updateTimeLeft(time.sessionTimeLeft));
	});

	window.dataAPI.onWeatherEvent(newWeather => {
		dispatch(weatherActions.addWeatherEvent(newWeather));
		dispatch(infoActions.updateReceived());
	});

	window.dataAPI.onWeatherLiveData(newWeather => {
		dispatch(weatherActions.updateLiveData(newWeather));
		dispatch(infoActions.updateReceived());
	});

	window.dataAPI.onTeleElectronics(newElectronics => {
		dispatch(telemetryActions.updateElectronics(newElectronics));
		dispatch(infoActions.updateReceived());
	});

	window.dataAPI.onTeleData(newTelemetry => {
		dispatch(telemetryActions.updateLiveData(newTelemetry));
		dispatch(infoActions.updateReceived());
	});

	window.dataAPI.onTimingSync(newTimings => {
		dispatch(strategyActions.updateRacingTimers(newTimings));
	});

	window.dataAPI.onTimingLive(newTimings => {
		dispatch(strategyActions.updateRacingTimers(newTimings));
	});

	window.dataAPI.onPitSync(newPits => {
		dispatch(strategyActions.updatePitMenu(newPits));
	});

	window.dataAPI.onFuelSync(newFuel => {
		dispatch(strategyActions.updateFuel(newFuel));
	});

	window.dataAPI.onTyresSync(newPressures => {
		dispatch(telemetryActions.updatePressures(newPressures));
	});
}
