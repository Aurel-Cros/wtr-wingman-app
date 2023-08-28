import React from 'react';
import { createRoot } from 'react-dom/client';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar/';

const domRoot = document.querySelector("#root");
const root = createRoot(domRoot);

function App() {
    return (
        <>
            <NavBar />
            <SideBar />
            <h1>This comes from React, bitches !</h1>
        </>
    );
}

root.render(App());