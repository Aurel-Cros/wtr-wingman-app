import {useSelector} from "react-redux";
import icons, {getWeatherIcon} from "../../utils/icons";

export default function CurrentWeather() {
	const weather = useSelector((state) => state.weather);
	const currentTyreSet = useSelector(
		(state) => state.telemetry.tyres.currentSet
	);
	const rainTyres = useSelector((state) => state.telemetry.tyres.rainTyres);

	const currWeather = weather.events.length < 1 ? {} : weather.events[0];
	const weatherLiveData = weather.liveData;

	const weatherDisplay = getWeatherIcon(currWeather.rainIntensity);
	weatherDisplay.tyres = rainTyres ? "Wet" : "Dry " + currentTyreSet;

	return (
		<div className="box data-box wide">
			<h2>Current weather</h2>
			<div className="data-row data">
				<img
					src={weatherDisplay.icon}
					alt={`Current weather :${weatherDisplay.name} `}
				/>
				{weatherDisplay.name}
			</div>
			<div className="data-row data">
				<img src={icons.tyre} alt="Tyre icon" />
				{weatherDisplay.tyres}
			</div>
			<div className="data-flex">
				<div className="layout-col">
					<p className="label">Air temp</p>
					<p className="data">
						{Math.round(weatherLiveData.airTemp)}°C
					</p>
				</div>
				<div className="layout-col">
					<p className="label">Track temp</p>
					<p className="data">
						{Math.round(weatherLiveData.roadTemp)}°C
					</p>
				</div>
				<div className="layout-col">
					<p className="label">Wind</p>
					<p className="data">
						{Math.round(weatherLiveData.windSpeed)}m/s&nbsp;
						<span
							style={{
								display: "inline-block",
								rotate: `${
									(weatherLiveData.windDirection * 180) /
									Math.PI
								}deg`,
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
