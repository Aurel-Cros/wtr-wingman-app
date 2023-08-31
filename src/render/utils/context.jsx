import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        telemetry: {},
        weather: [],
        strategy: {}
    });
    const [settings, setSettings] = useState({});

    window.dataAPI.clear(['weather', 'telemetry']);
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


    return (
        <DataContext.Provider value={{ data, setData, settings, setSettings }}>
            {children}
        </DataContext.Provider>
    )
}