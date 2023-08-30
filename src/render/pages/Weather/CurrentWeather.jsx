import icons from "../../utils/icons";

export default function CurrentWeather(props) {
    const weather = props.weather;
    if (Object.keys(weather).length < 1)
        return;

    const weatherDisplay = {}
    switch (weather.rainIntensity) {
        case 'ACC_NO_RAIN':
            weatherDisplay.name = 'clear';
            weatherDisplay.icon = icons.weather.sunny;
            break;
        case 'ACC_DRIZZLE':
            weatherDisplay.name = 'drizzle';
            weatherDisplay.icon = icons.weather.drizzle;
            break;
        case 'ACC_LIGHT_RAIN':
            weatherDisplay.name = 'light rain';
            weatherDisplay.icon = icons.weather.lightRain;
            break;
        case 'ACC_MEDIUM_RAIN':
            weatherDisplay.name = 'medium rain';
            weatherDisplay.icon = icons.weather.mediumRain;
            break;
        case 'ACC_HEAVY_RAIN':
            weatherDisplay.name = 'heavy rain';
            weatherDisplay.icon = icons.weather.heavyRain;
            break;
        case 'ACC_THUNDERSTORM':
            weatherDisplay.name = 'thunderstorm';
            weatherDisplay.icon = icons.weather.thunderstorm;
            break;
        default:
            weatherDisplay.name = '';
            weatherDisplay.icon = null;
    }
    weatherDisplay.tyres = weather.rainTyres ? 'wets' : ('dry ' + weather.currentTyreSet);

    return (
        <div className="box data-box">
            <h2>Current weather</h2>
            <div className="data-row data">
                <img src={weatherDisplay.icon} alt={`Current weather :${weatherDisplay.name} `} />
                {weatherDisplay.name}
            </div>
            <div className="data-row data">
                <img src={icons.tyre} alt="Tyre icon" />
                {weatherDisplay.tyres}
            </div>
            <div className="data-flex">
                <div className="data-col">
                    <p className="label">Air temp</p>
                    <p className="data">{Math.round(weather.airTemp)}°C</p>
                </div>
                <div className="data-col">
                    <p className="label">Track temp</p>
                    <p className="data">{Math.round(weather.roadTemp)}°C</p>
                </div>
                <div className="data-col">
                    <p className="label">Wind</p>
                    <p className="data">{Math.round(weather.windSpeed)}m/s&nbsp;
                        <span style={{
                            display: 'inline-block',
                            rotate: `${weather.windDirection * 180 / Math.PI}deg`
                        }}>↑</span>
                    </p>
                </div>
                <div className="data-col">
                    <p className="label">Track state</p>
                    <p className="data">{weather.trackStatus}</p>
                </div>
            </div>
        </div>
    )
}