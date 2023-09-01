import { useContext } from "react";
import { DataContext } from "../../utils/context";
import { formatTime } from "../../../common/util";
import TimeTicker from "./TimeTicker";

export default function TimeInfo() {
    const { data, currentTime, setCurrentTime } = useContext(DataContext);

    const currentTimeLocal = currentTime || -1;
    const remainingTime = Math.floor(data.weather[0]?.sessionTimeLeft) || -1;

    const lastUpdateTime = currentTimeLocal < 0 ? 0 : currentTimeLocal;

    return (
        <div className="box" id="time-info">
            <div className="time-row">
                <p className="label">Current time :</p>
                <p className="data"><TimeTicker $time={currentTimeLocal} setter={setCurrentTime}></TimeTicker></p>
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