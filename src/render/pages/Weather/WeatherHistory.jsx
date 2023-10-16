
import { getWeatherIcon } from "../../utils/icons";
import { formatTime, formatDuration } from "../../../common/util";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function WeatherHistory() {
	const [isFolded, setFolded] = useState(true);

	const currentTime = useSelector((state) => state.info.currentTime);
	const weatherEvents = useSelector((state) => state.weather.events);

	return (
		<div className="box weather-box wide">
			<h2 className="clickable" onClick={() => setFolded((s) => !s)}>
				{isFolded ? "↓" : "↑"} History
			</h2>
			<div
				className={
					"weather-col gap-1 foldable" + (isFolded ? " fold" : "")
				}>
				{weatherEvents
					.map((event, i) => {
						if (event.timestamp > currentTime) return;
						const nextEvent = weatherEvents[i + 1] || null;
						const duration =
							nextEvent === null
								? "undetermined"
								: formatDuration(
									Number(nextEvent.timestamp) -
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
								</div>
								<p className="weather">
									{formatTime(event.timestamp, "short")}
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}
