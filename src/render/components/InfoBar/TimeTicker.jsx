import { useEffect, useState } from "react";
import { formatTime24 } from "../../../common/util";

export default function TimeTicker({ $time, asc = true }) {

    const [time, setTime] = useState(0);
    const factor = asc ? 1 : -1;

    useEffect(() => {
        if ($time < 0)
            return;

        let newTime = Math.floor($time);
        const tick = setInterval(() => {
            newTime += factor
            setTime(newTime);
        }, 1000)
        return () => clearInterval(tick)
    }, [$time])

    return <>{formatTime24(time)}</>;
}