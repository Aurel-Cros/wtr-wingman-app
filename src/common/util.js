export const formatTime = (timestamp) => {
    let hours = Math.trunc(timestamp / 3600)
    let mins = Math.trunc((timestamp - hours * 3600) / 60)
    let hoursN = hours > 12 ? hours - 12 : hours
    mins = mins < 10 ? "0" + mins : mins
    let secs = (timestamp % 3600) % 60
    secs = secs < 10 ? "0" + secs : secs
    let amPm = hours > 11 ? "PM" : "AM"

    return `${hoursN}:${mins}<span class="small">:${secs} ${amPm}</span>`
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