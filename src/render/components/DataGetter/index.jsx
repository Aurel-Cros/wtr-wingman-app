import { useEffect, useContext } from "react";
import { DataContext } from "../../utils/context";

export function DataGetter() {
    const { data, setData } = useContext(DataContext)

    useEffect(() => {
        window.dataAPI.onWeatherData((_e, newData) => {
            setData({ ...data, weather: newData })
            console.log(data);
        })
    }, []);
}