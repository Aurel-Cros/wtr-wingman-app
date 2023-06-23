import React from 'react';
import { useState } from 'react';

function SideBar({ options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const transitionOn = () => {
        console.log('Open panel');
        setIsClosing(false)
        setIsOpen(true);
    }
    const transitionOff = () => {
        console.log('Close panel');
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(true);
            setIsOpen(false);
        }, 900);
    }

    return isOpen ?
        <React.Fragment>
            <button
                className="open-settings-btn"
                onClick={() => transitionOn()}>
            </button>
            <div id="side-bar" className={isClosing ? "close" : null}>

                {console.log("Render !")}
                <button onClick={() => transitionOff()} className="panel-fold-btn"></button>
                <h2>Settings</h2>
                <label id="username">
                    Username :
                    <input type="text" value={options?.username} />
                </label>

                <div className="separator"></div>

                <label id="time-format">
                    Time Format :
                    <select defaultValue="24">
                        <option value="12">12:00am</option>
                        <option value="24">24:00</option>
                    </select>
                </label>

                <label id="speed-unit">
                    Speed Unit :
                    <select defaultValue="kph">
                        <option>kph</option>
                        <option>mph</option>
                    </select>
                </label>

                <div className="separator"></div>

                <label id="sending-rate">
                    Sending Rate :
                    <select defaultValue="100">
                        <option value="10">10 hz</option>
                        <option value="60">60 hz</option>
                        <option value="100">100 hz</option>
                    </select>
                </label>
                <div>
                    <a href="#">Send a bug report</a>
                    <p>App version</p>
                </div>
            </div>
        </React.Fragment>
        :
        <button
            className="open-settings-btn"
            onClick={() => transitionOn()}>
        </button>
}
export default SideBar