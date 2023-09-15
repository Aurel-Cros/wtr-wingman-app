import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Weather from './pages/Weather';
import Telemetry from './pages/Telemetry';
import Strategy from './pages/Strategy';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar/';
import InfoBar from './components/InfoBar';

import store from './store/store';
import { Provider } from 'react-redux';
import { DataProvider } from './utils/context';

const domRoot = document.querySelector("#root");
const root = createRoot(domRoot);

function App() {
    return (
        <Provider store={store}>
            <DataProvider>
                <Router>
                    <NavBar />
                    <SideBar />
                    <InfoBar />
                    <main>
                        <Routes>
                            <Route path="/main_window" element={<Weather />} />
                            <Route path="/weather" element={<Weather />} />
                            <Route path="/strategy" element={<Strategy />} />
                            <Route path="/telemetry" element={<Telemetry />} />
                        </Routes>
                    </main>
                </Router>
            </DataProvider>
        </Provider>
    );
}

root.render(App());