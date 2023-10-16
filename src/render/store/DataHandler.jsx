import { useDispatch } from "react-redux";
import { weatherActions } from "./features/weatherSlice";
import { infoActions } from "./features/infoSlice";
import { telemetryActions } from "./features/telemetrySlice";

export default function DataHandler() {
	console.log("Data handler live");
	const dispatch = useDispatch();

	window.dataAPI.clear(["weather", "telemetry"]);
	window.dataAPI.onWeatherEvent((_e, newWeather) => {
		dispatch(weatherActions.addWeatherEvent(newWeather));
	});
	window.dataAPI.onWeatherLiveData((_e, newWeather) => {
		dispatch(weatherActions.updateLiveData(newWeather));
	});
	window.dataAPI.onTimeSync((_e, time) => {
		dispatch(infoActions.updateCurrentTime(time.currentTime));
		dispatch(
			infoActions.updateTimeLeft(Math.floor(time.sessionTimeLeft - 810000))
		);
	});
	window.dataAPI.onTeleData((_e, newTelemetry) => {
		dispatch(telemetryActions.updateLiveData(newTelemetry))
	});
	window.dataAPI.OnTeleElectronics((_e, newElectronics) => {
		dispatch(telemetryActions.updateElectronics(newElectronics))
	})
}
