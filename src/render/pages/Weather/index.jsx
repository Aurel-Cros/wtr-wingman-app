import { useContext } from "react";
import { DataContext } from "../../utils/context";
import CurrentWeather from "./CurrentWeather";
import WeatherHistory from "./WeatherHistory";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
    const { data } = useContext(DataContext);
    return <>
        <div className="layout-col">
            <CurrentWeather data={data ?? {}}></CurrentWeather>
        </div>
        <div className="layout-col">
            <WeatherForecast data={data ?? {}}></WeatherForecast>
            <WeatherHistory data={data ?? {}}></WeatherHistory>
        </div>
    </>
}