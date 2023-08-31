import './style.scss';

import { getWeatherIcon } from '../../utils/icons';
import { formatTime, formatDuration } from '../../../common/util'
import { useState } from 'react';

export default function WeatherHistory({ data }) {
    const [isFolded, setFolded] = useState(false);

    const weather = data.weather;
    const currentTime = weather.eventTime;
    return weather.length > 0 && (
        <div className="box data-box wide">
            <h2 className='clickable' onClick={() => (setFolded(!isFolded))}>History</h2>
            <div className={"data-col gap-1 history-list" + (isFolded ? " fold" : "")}>
                {
                    weather.map((event, i) => {
                        if (event.eventTime > currentTime)
                            return;

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
                                </div>
                                <p className="data">
                                    {formatTime(event.eventTime, 'short')}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}