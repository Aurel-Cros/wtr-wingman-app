import {useState} from "react";
import {getWeatherIcon} from "../../utils/icons";
import {formatTime, formatDuration} from "../../../common/util";
import {useSelector} from "react-redux";


export default function WeatherForecast() {
	const [isFolded, setFolded] = useState(false);

	const currentTime = useSelector((state) => state.info.currentTime);
	const weather = useSelector((state) => state.weather.events);

	console.log(weather);

	function getTyreAdvice(weather, weatherEvent, durationInS) {
		// Nothing = 0 ; Dry = 1 ; Rain = 2
		let recommend = 0;

		const duration = Math.round(durationInS / 60);
		const rainTyre = weather.car.rainTyres;
		const rain = weatherEvent.rainIntensity;

		if (rain !== "ACC_NO_RAIN" && rainTyre === false) {
			if (
				(rain === "ACC_LIGHT_RAIN" && duration > 15) ||
				(rain === "ACC_MEDIUM_RAIN" && duration > 10) ||
				rain === "ACC_HEAVY_RAIN" ||
				rain === "ACC_THUNDERSTORM"
			)
				recommend = 2;
		} else if (
			rain === "ACC_NO_RAIN" &&
			rainTyre === true &&
			duration > 15
		) {
			recommend = 1;
		}

		return recommend;
	}

	return (
		<div className="box weather-box wide">
			<h2 className="clickable" onClick={() => setFolded((s) => !s)}>
				{isFolded ? "↓" : "↑"} Forecast{" "}
				<span className="weather">at 30 mins</span>
			</h2>
			<div
				className={
					"weather-col gap-1 foldable forecast-list" +
					(isFolded ? " fold" : "")
				}>
				{weather
					.filter((event) => event.timestamp > currentTime)
					.map((event, i) => {
						const previousEvent = weather[i - 1] || null;
						const duration =
							previousEvent === null
								? "undetermined"
								: formatDuration(
										Number(previousEvent.timestamp) -
											Number(event.timestamp)
								  );
						const weatherAssets = getWeatherIcon(
							event.rainIntensity
						);
						return (
							<div
								className="weather-row justify-between"
								key={event.timestamp}>
								<div className="weather-col">
									<p className="weather-row">
										<img
											src={weatherAssets.icon}
											alt="Event weather"
										/>
										{weatherAssets.name}
									</p>
									<p className="subtext">
										Duration : {duration}
									</p>
									{duration === "undetermined" && (
										<p className="subtext">
											{`(min. ${Math.floor(
												(currentTime +
													30 * 60 -
													event.timestamp) /
													60
											)} mins)`}
										</p>
									)}
								</div>
								<p className="weather">
									<span className="subtext">coming at </span>
									{formatTime(event.timestamp, "short")}
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}
