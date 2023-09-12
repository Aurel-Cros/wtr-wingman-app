import icons, { getWeatherIcon } from "../../utils/icons";

export default function CurrentWeather({ data }) {
    if (data.weather.length < 1)
        return;
    const weather = data.weather[0];
    const car = data.car

    const weatherDisplay = getWeatherIcon(weather.rainIntensity);
    weatherDisplay.tyres = car.rainTyres ? 'Wet' : ('Dry ' + car.currentTyreSet);

    return (
        <div className="box data-box wide">
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
                <div className="layout-col">
                    <p className="label">Air temp</p>
                    <p className="data">{Math.round(weather.airTemp)}°C</p>
                </div>
                <div className="layout-col">
                    <p className="label">Track temp</p>
                    <p className="data">{Math.round(weather.roadTemp)}°C</p>
                </div>
                <div className="layout-col">
                    <p className="label">Wind</p>
                    <p className="data">{Math.round(weather.windSpeed)}m/s&nbsp;
                        <span style={{
                            display: 'inline-block',
                            rotate: `${weather.windDirection * 180 / Math.PI}deg`
                        }}>↑</span>
                    </p>
                </div>
                <div className="layout-col">
                    <p className="label">Track state</p>
                    <p className="data">{weather.trackStatus}</p>
                </div>
            </div>
        </div>
    )
}