import React from 'react';
import { createRoot } from 'react-dom/client';

import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';

const domRoot = document.querySelector("#root");
const root = createRoot(domRoot);

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <SideBar username={localStorage.getItem('username')}></SideBar>
            <h1>This comes from React, bitches !</h1>
        </React.Fragment>
    );
}

root.render(App());