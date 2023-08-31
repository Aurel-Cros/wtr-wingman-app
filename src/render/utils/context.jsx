import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        telemetry: {},
        weather: [],
        strategy: {},
        car: {}
    });
    const [settings, setSettings] = useState({});
    window.dataAPI.clear(['weather', 'telemetry']);
    window.dataAPI.onWeatherData((_e, newData) => {
        const updatedData = {
            weather: [
                ...newData.weather,
                ...data.weather
            ],
            // telemetry: [
            //     ...newData.telemetry,
            //     ...data.telemetry
            // ],
            // strategy: {
            //     ...newData.strategy
            // },
            car: {
                ...newData.car
            }
        };
        setData(updatedData);
    });
    window.dataAPI.onTeleData((_e, newData) => {
        const updatedTelemetry = { ...data, telemetry: newData };
        setData(updatedTelemetry);
    });


    return (
        <DataContext.Provider value={{ data, setData, settings, setSettings }}>
            {children}
        </DataContext.Provider>
    )
}