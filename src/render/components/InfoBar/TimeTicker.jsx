import { useEffect, useState } from "react";
import { formatTime } from "../../../common/util";

export default function TimeTicker({ $time, asc = true }) {

    const [time, setTime] = useState($time);
    const factor = asc ? 1 : -1;

    useEffect(() => {
        if ($time < 0)
            return;

        setTime($time - 1);

        const tick = setInterval(() => {
            setTime(a => a + factor)
        }, 1000)

        return () => clearInterval(tick)
    }, [$time])

    return <>{formatTime(time, 'skipH')}</>;
}