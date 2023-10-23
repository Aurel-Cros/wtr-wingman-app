import { useSelector } from "react-redux";
import icons, { getWeatherIcon } from "../../utils/icons";

export default function CurrentWeather() {
	const currentTime = useSelector(state => state.info.currentTime);
	const weatherEvents = useSelector(state => state.weather.events);
	const weatherLiveData = useSelector(state => state.weather.liveData);

	const currentTyreSet = useSelector(state => state.telemetry.tyres.currentSet);
	const rainTyres = useSelector(state => state.telemetry.tyres.rainTyres);

	const currWeather =
		weatherEvents.length < 1
			? {}
			: weatherEvents
					.toSorted((a, b) => a.timestamp - b.timestamp)
					.find((a, i) => {
						return a.timestamp < currentTime && weatherEvents[i + 1].timestamp > currentTime;
					});

	const weatherDisplay = getWeatherIcon(currWeather.rainIntensity);
	weatherDisplay.tyres = rainTyres ? "Wet" : currentTyreSet ? "Dry " + currentTyreSet : "No tyre fitted";

	return (
		<div className="box data-box wide">
			<h2>Current weather</h2>
			<div className="data-row data">
				<object data={weatherDisplay.icon} type="image/png"></object>
				{weatherDisplay.name}
			</div>
			<div className="data-row data">
				<img src={icons.tyre} alt="Tyre icon" />
				{weatherDisplay.tyres}
			</div>
			<div className="data-flex">
				<div className="layout-col">
					<p className="label">Air temp</p>
					<p className="data">{Math.round(weatherLiveData.airTemp)}°C</p>
				</div>
				<div className="layout-col">
					<p className="label">Track temp</p>
					<p className="data">{Math.round(weatherLiveData.roadTemp)}°C</p>
				</div>
				<div className="layout-col">
					<p className="label">Wind</p>
					<p className="data">
						{Math.round(weatherLiveData.windSpeed)}m/s&nbsp;
						<span
							style={{
								display: "inline-block",
								rotate: `${(weatherLiveData.windDirection * 180) / Math.PI}deg`,
							}}>
							↑
						</span>
					</p>
				</div>
				<div className="layout-col">
					<p className="label">Track state</p>
					<p className="data">{weatherLiveData.trackStatus}</p>
				</div>
			</div>
		</div>
	);
}
