export default function TimeInfo() {
    const currentTime = '01:23';
    const remaningTime = '01:23';
    const lastUpdateTime = '01:23';
    return (
        <div className="box" id="time-info">
            <div className="time-row">
                <p className="label">Session current time :</p>
                <p className="data">{currentTime}</p>
            </div>
            <div className="time-row">
                <p className="label">Race time remaining :</p>
                <p className="data">{remaningTime}</p>
            </div>
            <div className="separator"></div>
            <div className="time-row">
                <p className="label">Last update received :</p>
                <p className="data">{lastUpdateTime}</p>
            </div>
        </div>
    )
}