import sunny from "../assets/icons/sunny.svg";
import drizzle from "../assets/icons/drizzle.svg";
import lightRain from "../assets/icons/light-rain.svg";
import mediumRain from "../assets/icons/medium-rain.svg";
import heavyRain from "../assets/icons/heavy-rain.svg";
import thunderstorm from "../assets/icons/thunderstorm.svg";
import tyre from "../assets/icons/tyre.svg";

const icons = {
    weather: {
        sunny: sunny,
        drizzle: drizzle,
        lightRain: lightRain,
        mediumRain: mediumRain,
        heavyRain: heavyRain,
        thunderstorm: thunderstorm
    },
    tyre: tyre
}

export const getWeatherIcon = (weather) => {
    const weatherDisplay = {};

    switch (weather) {
        case 'ACC_NO_RAIN':
            weatherDisplay.name = 'Clear';
            weatherDisplay.icon = icons.weather.sunny;
            break;
        case 'ACC_DRIZZLE':
            weatherDisplay.name = 'Drizzle';
            weatherDisplay.icon = icons.weather.drizzle;
            break;
        case 'ACC_LIGHT_RAIN':
            weatherDisplay.name = 'Light rain';
            weatherDisplay.icon = icons.weather.lightRain;
            break;
        case 'ACC_MEDIUM_RAIN':
            weatherDisplay.name = 'Medium rain';
            weatherDisplay.icon = icons.weather.mediumRain;
            break;
        case 'ACC_HEAVY_RAIN':
            weatherDisplay.name = 'Heavy rain';
            weatherDisplay.icon = icons.weather.heavyRain;
            break;
        case 'ACC_THUNDERSTORM':
            weatherDisplay.name = 'Thunderstorm';
            weatherDisplay.icon = icons.weather.thunderstorm;
            break;
        default:
            weatherDisplay.name = '';
            weatherDisplay.icon = null;
    }

    return weatherDisplay;
}
export default icons;