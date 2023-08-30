import { useContext } from "react";
import { DataContext } from "../../utils/context";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
    const { data } = useContext(DataContext);
    return <main>
        <CurrentWeather weather={data.weather ?? []}></CurrentWeather>
    </main>
}