import { useState } from "react";
import { getWeatherIcon } from "../../utils/icons";
import { formatTime, formatDuration } from "../../../common/util";
import { useSelector } from "react-redux";
import TyreAdvice from "./TyreAdvice";

export default function WeatherForecast() {
	const [isFolded, setFolded] = useState(false);

	const currentTime = useSelector(state => state.info.currentTime);
	const weatherEvents = useSelector(state => state.weather.events);

	return (
		<div className="box weather-box wide">
			<h2 className="clickable" onClick={() => setFolded(s => !s)}>
				{isFolded ? "↓" : "↑"} Forecast <span className="weather">at 30 mins</span>
			</h2>
			<div className={"weather-col gap-1 foldable" + (isFolded ? " fold" : "")}>
				{weatherEvents.map((event, i) => {
					if (event.timestamp < currentTime) return;

					const nextEvent = weatherEvents[i + 1] || null;

					const duration =
						nextEvent === null ? "TBD" : formatDuration(Number(nextEvent.timestamp) - Number(event.timestamp));

					const weatherAssets = getWeatherIcon(event.rainIntensity);

					return (
						<div className="weather-event" key={event.timestamp + Math.random()}>
							<div>
								<div className="weather-row">
									<img src={weatherAssets.icon} alt="Event weather" />
									<p>{weatherAssets.name}</p>
									<p className="right full">
										<span className="subtext">coming at </span>
										{formatTime(event.timestamp)}
									</p>
								</div>
								<p className="subtext">Duration : {duration}</p>
								{duration === "TBD" && (
									<p className="subtext">
										{`(min. ${formatDuration(currentTime + 30 * 60 - event.timestamp)})`}
									</p>
								)}
								<TyreAdvice testWeather={{ ...event, duration }} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
