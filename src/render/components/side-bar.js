import React from 'react';
import { useState } from 'react';

function SideBar() {
    const username = localStorage.getItem('username') || "";
    const timeFormat = localStorage.getItem('time-format') || 24;
    const speedUnit = localStorage.getItem('speed-unit') || "kph";
    const sendingRate = localStorage.getItem('sending-rate') || 100;

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

                {console.log("Render side bar !")}
                <button onClick={() => transitionOff()} className="panel-fold-btn"></button>
                <h2>Settings</h2>
                <label id="username">
                    Username :
                    <input type="text"
                        id="usernameInput"
                        defaultValue={username}
                        onChange={(e) => {
                            localStorage.setItem('username', e.target.value);
                            window.settings.setUsername(e.target.value);
                        }}
                    />
                </label>

                <div className="separator"></div>

                <label id="time-format">
                    Time Format :
                    <select defaultValue={timeFormat}
                        onChange={(e) => { localStorage.setItem('time-format', e.target.value) }}>
                        <option value="24">24:00</option>
                        <option value="12">12:00am</option>
                    </select>
                </label>

                <label id="speed-unit">
                    Speed Unit :
                    <select defaultValue={speedUnit}
                        onChange={(e) => { localStorage.setItem('speed-unit', e.target.value) }}>
                        <option>kph</option>
                        <option>mph</option>
                    </select>
                </label>

                <div className="separator"></div>

                <label id="sending-rate">
                    Sending Rate :
                    <select defaultValue={sendingRate}
                        onChange={(e) => { localStorage.setItem('sending-rate', e.target.value) }}>
                        <option value="10">10 hz</option>
                        <option value="5">5 hz</option>
                        <option value="1">1 hz</option>
                    </select>
                </label>
                <div>
                    <a href="#">Send a bug report</a>
                    <p>App version 3.0.a</p>
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