import { createContext, useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [settings, setSettings] = useState({});
    return (
        <DataContext.Provider value={{ data, setData, settings, setSettings }}>
            {children}
        </DataContext.Provider>
    )
}