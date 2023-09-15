import './style.scss';

import { getWeatherIcon } from '../../utils/icons';
import { formatTime, formatDuration } from '../../../common/util'
import { useContext, useState } from 'react';
import { DataContext } from '../../utils/context';

export default function WeatherHistory({ data }) {
    const [isFolded, setFolded] = useState(true);
    const { currentTime } = useContext(DataContext);

    const weather = data.weather;

    return (
        <div className="box data-box wide">
            <h2 className='clickable' onClick={() => (setFolded(!isFolded))}>{isFolded ? '↓' : '↑'} History</h2>
            <div className={"data-col gap-1 foldable" + (isFolded ? " fold" : "")}>
                {
                    weather.filter(event => event.eventTime < currentTime)
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