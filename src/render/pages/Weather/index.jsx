import { useContext } from "react";
import { DataContext } from "../../utils/context";
import CurrentWeather from "./CurrentWeather";
import WeatherHistory from "./WeatherHistory";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
    const { data } = useContext(DataContext);
    return <main>
        <div className="layout-col">
            <CurrentWeather data={data ?? {}}></CurrentWeather>
            <WeatherForecast data={data ?? {}}></WeatherForecast>
        </div>
        <div className="layout-col">
            <WeatherHistory data={data ?? {}}></WeatherHistory>
        </div>
    </main>
}