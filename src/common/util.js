export const formatTime = (timestamp, format = "full", timeInMs = false) => {
	if (timestamp === -1) return "--:--";
	const hours = Math.floor(timestamp / 3600 / (timeInMs ? 1000 : 1));
	const mins = Math.floor((timestamp % 3600) / 60);
	const seconds = Math.floor((timestamp % 3600) % 60);

	const hoursOut = format === "skipH" && hours < 1 ? "" : hours + ":";
	const minsOut = mins < 10 ? "0" + mins : mins;
	const secsOut = format !== "short" ? ":" + (seconds < 10 ? "0" + seconds : seconds) : "";

	const currentTime = hoursOut + minsOut + secsOut;
	return currentTime;
};

export const formatDuration = (time, timeInMs = false) => {
	const duration = time / (timeInMs ? 1000 : 1);
	const hours = Math.floor(duration / 3600);
	const mins = Math.floor((duration % 3600) / 60);
	const seconds = Math.floor((duration % 3600) % 60);

	const result = hours > 0 ? hours + "h" + mins : mins > 0 ? mins + "m" : seconds + "s";
	return result;
};

export const formatLaptime = time => {
	const mins = Math.floor(time / 1000 / 60);
	const seconds = ((time / 1000) % 60).toFixed(3);

	const result = mins + ":" + seconds;
	return result;
};

export const formatDelta = (time, precision = 3) => {
	const result =
		time > 0 ? `+${time.toFixed(precision)}` : time === 0 ? time.toFixed(precision) : `-${time.toFixed(precision)}`;
	return result;
};

export const formatWeather = weather => {
	/* 
	ACC_NO_RAIN
	ACC_DRIZZLE
	ACC_LIGHT_RAIN
	ACC_MEDIUM_RAIN
	ACC_HEAVY_RAIN
	ACC_THUNDERSTORM
	=> 
	NO RAIN
	etc
	*/
	return weather.substring(4).replace("_", " ");
};
export const getVersion = () => process.env.getVersion();

export const shortString = (string, maxLength) => string.slice(0, maxLength) + (string.length > maxLength ? "..." : "");