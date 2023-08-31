export default function WeatherHistory({ data }) {
    const weather = data.weather;
    return weather.length > 0 && (
        <div>
            <h2>History</h2>
            {
                weather.map(event =>
                    <div key={event.eventTime}>
                        <p>Air temp: {event.airTemp}</p>
                        <p>Track temp: {event.roadTemp}</p>
                    </div>)
            }
        </div>
    )
}