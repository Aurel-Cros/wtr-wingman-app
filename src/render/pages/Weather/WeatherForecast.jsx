import { useContext, useState } from "react";
import { getWeatherIcon } from "../../utils/icons";
import { DataContext } from "../../utils/context";
import { formatTime, formatDuration } from '../../../common/util'

export default function CurrentWeather({ data }) {
    const [isFolded, setFolded] = useState(false);
    const { currentTime } = useContext(DataContext);

    if (data.weather.length < 1)
        return;

    const weather = data.weather;

    return (
        <div className="box data-box wide">
            <h2 className='clickable' onClick={() => (setFolded(!isFolded))}>{isFolded ? '↓' : '↑'} Forecast <span className="data">at 30 mins</span></h2>
            <div className={"data-col gap-1 foldable forecast-list" + (isFolded ? " fold" : "")}>
                {
                    weather.filter(event => event.eventTime > currentTime)
                        .map((event, i) => {

                            const previousEvent = weather[i - 1] || null;
                            const duration = previousEvent === null ? 'undetermined' : formatDuration(Number(previousEvent.eventTime) - Number(event.eventTime));
                            const weatherAssets = getWeatherIcon(event.rainIntensity)
                            return (
                                <div className="data-row justify-between" key={event.eventTime}>
                                    <div className='data-col'>
                                        <p className='data-row'>
                                            <img src={weatherAssets.icon} alt="Event weather" />
                                            {weatherAssets.name}
                                        </p>
                                        <p className="subtext">
                                            Duration : {duration}
                                        </p>
                                        <p className="subtext">
                                            {
                                                duration === 'undetermined' &&
                                                `(min. ${Math.floor(((currentTime + 30 * 60) - event.eventTime) / 60)} mins)`
                                            }
                                        </p>
                                    </div>
                                    <p className="data">
                                        <span className="subtext">coming at </span>{formatTime(event.eventTime, 'short')}
                                    </p>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}