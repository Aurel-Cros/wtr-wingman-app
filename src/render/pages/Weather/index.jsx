import "./style.scss";
import CurrentWeather from "./CurrentWeather";
import WeatherHistory from "./WeatherHistory";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
	return (
		<>
			<div className="layout-col">
				<CurrentWeather></CurrentWeather>
			</div>
			<div className="layout-col">
				<WeatherForecast></WeatherForecast>
				<WeatherHistory></WeatherHistory>
			</div>
		</>
	);
}
