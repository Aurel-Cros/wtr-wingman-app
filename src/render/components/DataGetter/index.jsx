import { useEffect, useContext } from "react";
import { DataContext } from "../../utils/context";

export function DataGetter() {
    const { data, setData } = useContext(DataContext)

    useEffect(() => {
        window.dataAPI.onWeatherData((_e, newData) => {
            const updatedData = {
                ...data,
                weather: [
                    newData,
                    ...data.weather
                ]
            };
            setData(updatedData);
        });

        window.dataAPI.onTeleData((_e, newData) => {
            const updatedTelemetry = { ...data, telemetry: newData };
            setData(updatedTelemetry);
        });

    }, [data]);
}