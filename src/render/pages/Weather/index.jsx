import CurrentWeather from "./CurrentWeather";
import WeatherHistory from "./WeatherHistory";
import WeatherForecast from "./WeatherForecast";
import {useSelector} from "react-redux";

export default function Weather() {
	const weather = useSelector((state) => state.weather);
	return (
		<>
			<div className="layout-col">
				<CurrentWeather weather={weather ?? {}}></CurrentWeather>
			</div>
			<div className="layout-col">
				<WeatherForecast></WeatherForecast>
				<WeatherHistory></WeatherHistory>
			</div>
		</>
	);
}
