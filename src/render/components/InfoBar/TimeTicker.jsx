import { useEffect, useState } from "react";
import { formatTime24 } from "../../../common/util";

export default function TimeTicker({ $time, asc = true }) {

    const [time, setTime] = useState(0);
    const factor = asc ? 1 : -1;

    const tickTime = () => {
        $time += factor
        if ($time !== time) {
            setTime($time);
        }
    }

    useEffect(() => {
        if ($time < 0)
            return;

        const tick = setInterval(tickTime, 1000)
        return () => clearInterval(tick)
    }, [$time])

    return <>{formatTime24(time)}</>;
}