import { useSelector } from "react-redux";
import icons from "../../utils/icons";

export default function TyreAdvice({ testWeather }) {
	const trackStatus = useSelector(state => state.weather.liveData.trackStatus);
	const trackTemp = useSelector(state => state.weather.liveData.roadTemp);
	const hasRainTyres = useSelector(state => state.telemetry.tyres.rainTyres);

	let tyreMessage = "";

	if (!hasRainTyres) {
		if (
			testWeather.rainIntensity === "ACC_THUNDERSTORM" ||
			testWeather.rainIntensity === "ACC_HEAVY_RAIN" ||
			testWeather.rainIntensity === "ACC_MEDIUM_RAIN"
		)
			tyreMessage = "getWet";
		else if (testWeather.rainIntensity === "ACC_LIGHT_RAIN" && testWeather.duration > 10) tyreMessage = "getWet";
		else if (testWeather.rainIntensity === "ACC_DRIZZLE" && testWeather.duration > 15 && trackTemp < 10)
			tyreMessage = "getWet";
	} else {
		if (testWeather.rainIntensity === "ACC_NO_RAIN") {
			if (
				trackStatus === "ACC_DAMP" &&
				((trackTemp > 20 && testWeather.duration > 20) || (trackTemp > 30 && testWeather.duration > 15))
			)
				tyreMessage = "getDry";
			else if (
				trackStatus === "ACC_WET" &&
				((trackTemp > 30 && testWeather.duration > 20) || (trackTemp > 40 && testWeather.duration > 15))
			)
				tyreMessage = "getDry";
			else if (["ACC_GREASY", "ACC_GREEN", "ACC_FAST", "ACC_OPTIMUM"].includes(trackStatus)) tyreMessage = "getDry";
		}
	}

	return (
		<>
			{tyreMessage === "getWet" && (
				<p className="data-row bold red">
					<img src={icons.tyre} alt="Tyre icon" />
					Wet tyres recommended !
				</p>
			)}
			{tyreMessage === "getDry" && (
				<p className="data-row bold green">
					<img src={icons.tyre} alt="Tyre icon" />
					Dry tyres recommended !
				</p>
			)}
		</>
	);
}
