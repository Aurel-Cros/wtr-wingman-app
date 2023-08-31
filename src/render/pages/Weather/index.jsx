import { useContext } from "react";
import { DataContext } from "../../utils/context";
import CurrentWeather from "./CurrentWeather";
import WeatherHistory from "./WeatherHistory";

export default function Weather() {
    const { data } = useContext(DataContext);
    return <main>
        <CurrentWeather data={data ?? []}></CurrentWeather>
        <WeatherHistory data={data ?? []}></WeatherHistory>
    </main>
}