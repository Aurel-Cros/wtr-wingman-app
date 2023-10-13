import {useDispatch} from "react-redux";
import {weatherActions} from "./features/weatherSlice";

export default function DataHandler() {
	console.log("Data handler live");
	const dispatch = useDispatch();

	window.dataAPI.clear(["weather", "telemetry"]);
	window.dataAPI.onWeatherData((_e, newWeather) => {
		dispatch(weatherActions.addWeatherEvent(newWeather.event));
		dispatch(weatherActions.updateLiveData(newWeather.liveData));
	});
	window.dataAPI.onTeleData((_e, newData) => {});

	return <></>;
}
