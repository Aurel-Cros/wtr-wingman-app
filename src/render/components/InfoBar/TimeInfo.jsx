import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../utils/context";
import { formatTime24 } from "../../../common/util";

export default function TimeInfo() {
    const { data } = useContext(DataContext);

    const currentTime = Math.floor(data.graphics?.Clock) || 0;
    const remainingTime = Math.floor(data.graphics?.sessionTimeLeft) || 3600;

    const lastUpdateTime = 184;

    return (
        <div className="box" id="time-info">
            <div className="time-row">
                <p className="label">Session current time :</p>
                <p className="data">{formatTime24(currentTime)}</p>
            </div>
            <div className="time-row">
                <p className="label">Race time remaining :</p>
                <p className="data">{formatTime24(remainingTime)}</p>
            </div>
            <div className="separator"></div>
            <div className="time-row">
                <p className="label">Last update received :</p>
                <p className="data">{formatTime24(lastUpdateTime)}</p>
            </div>
        </div>
    )
}