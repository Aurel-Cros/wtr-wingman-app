import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Weather from './pages/Weather';
import Telemetry from './pages/Telemetry';
import Strategy from './pages/Strategy';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar/';
import InfoBar from './components/InfoBar';
import { DataProvider } from './utils/context';
import { DataGetter } from './components/DataGetter';

const domRoot = document.querySelector("#root");
const root = createRoot(domRoot);

function App() {
    return (
        <Router>
            <DataProvider>
                <DataGetter />
                <NavBar />
                <SideBar />
                <InfoBar />
                <Routes>
                    <Route path="/main_window" element={<Weather />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/strategy" element={<Strategy />} />
                    <Route path="/telemetry" element={<Telemetry />} />
                </Routes>
            </DataProvider>
        </Router>
    );
}

root.render(App());