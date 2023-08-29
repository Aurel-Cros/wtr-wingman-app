export const formatTime12 = (timestamp) => {
    const hours = Math.trunc(timestamp / 3600);
    let mins = Math.trunc((timestamp - hours * 3600) / 60);
    const hoursN = hours > 0 ? (hours > 12 ? hours - 12 : hours) + ':' : '';
    mins = mins < 10 ? "0" + mins : mins + ':';
    let secs = (timestamp % 3600) % 60;
    secs = secs < 10 ? "0" + secs : secs;
    const amPm = hours > 11 ? "PM" : "AM";

    return `${hoursN}${mins}${secs} ${amPm}`;
}
export const formatTime24 = (timestamp, timeInMs = true) => {

    const hours = Math.floor(timestamp / 3600 / (timeInMs ? 1000 : 1));
    const mins = Math.floor(timestamp % 3600 / 60);
    const seconds = Math.floor(timestamp % 3600 % 60);
    const currentTime = (hours > 0 ? hours + ':' : '') + (mins < 10 ? '0' + mins : mins) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    return currentTime;
}

export const formatWeather = (weather) => {
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
    return weather.substring(4).replace("_", " ")
}
export const getVersion = () => process.env.getVersion();