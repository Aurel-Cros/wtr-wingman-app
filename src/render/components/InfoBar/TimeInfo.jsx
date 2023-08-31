import { useContext } from "react";
import { DataContext } from "../../utils/context";
import { formatTime24 } from "../../../common/util";
import TimeTicker from "./TimeTicker";

export default function TimeInfo() {
    const { data } = useContext(DataContext);

    const currentTime = Math.floor(data.weather[0]?.eventTime) || -1;
    const remainingTime = Math.floor(data.weather[0]?.sessionTimeLeft) || -1;

    const lastUpdateTime = currentTime < 0 ? 0 : currentTime;

    return (
        <div className="box" id="time-info">
            <div className="time-row">
                <p className="label">Session current time :</p>
                <p className="data"><TimeTicker $time={currentTime}></TimeTicker></p>
            </div>
            <div className="time-row">
                <p className="label">Race time remaining :</p>
                <p className="data"><TimeTicker $time={remainingTime} asc={false}></TimeTicker></p>
            </div>
            <div className="separator"></div>
            <div className="time-row">
                <p className="label">Last update received :</p>
                <p className="data">{formatTime24(lastUpdateTime)}</p>
            </div>
        </div>
    )
}