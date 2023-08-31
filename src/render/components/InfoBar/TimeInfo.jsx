import { useContext } from "react";
import { DataContext } from "../../utils/context";
import { formatTime } from "../../../common/util";
import TimeTicker from "./TimeTicker";

export default function TimeInfo() {
    const { data } = useContext(DataContext);

    const currentTime = Math.floor(data.weather[0]?.eventTime) || -1;
    const remainingTime = Math.floor(data.weather[0]?.sessionTimeLeft) || -1;

    const lastUpdateTime = currentTime < 0 ? 0 : currentTime;

    return (
        <div className="box" id="time-info">
            <div className="time-row">
                <p className="label">Current time :</p>
                <p className="data"><TimeTicker $time={currentTime}></TimeTicker></p>
            </div>
            <div className="time-row">
                <p className="label">Time remaining :</p>
                <p className="data"><TimeTicker $time={remainingTime} asc={false}></TimeTicker></p>
            </div>
            <div className="separator"></div>
            <div className="time-row">
                <p className="label">Last update :</p>
                <p className="data">{formatTime(lastUpdateTime, 'short')}</p>
            </div>
        </div>
    )
}