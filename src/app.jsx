import React from 'react';
import { createRoot } from 'react-dom/client';

const domRoot = document.querySelector("#root");
const root = createRoot(domRoot);

function App() {
    return (
        <h1>This comes from React, bitches !</h1>
    );
}

root.render(App());