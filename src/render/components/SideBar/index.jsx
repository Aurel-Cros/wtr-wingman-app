import { useState } from 'react';
import logo from '../../assets/images/wingman-logo.png';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeSendingRate, changeSpeedUnit, changeTimeFormat } from '../../store/features/settingsSlice';

function SideBar() {
    const username = useSelector(state => state.settings.username);
    const timeFormat = useSelector(state => state.settings.timeFormat);
    const speedUnit = useSelector(state => state.settings.speedUnit);
    const sendingRate = useSelector(state => state.settings.sendingRate);

    const dispatch = useDispatch();

    const updateUsername = (value) => {
        localStorage.setItem('username', value);
        window.settings.setUsername(value);
        dispatch(changeName(value));
    }
    const updateTimeFormat = (value) => {
        localStorage.setItem('time-format', value);
        dispatch(changeTimeFormat(value));
    }
    const updateSpeedUnit = (value) => {
        localStorage.setItem('speed-unit', value);
        dispatch(changeSpeedUnit(value));
    }
    const updateSendingRate = (value) => {
        localStorage.setItem('sending-rate', value);
        dispatch(changeSendingRate(value));
    }

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
        <>
            <button
                className="open-settings-btn"
                onClick={() => transitionOn()}>
            </button>
            <div id="side-bar" className={isClosing ? "close" : null}>

                <div id="app-info">
                    <a href="#">Send a bug report</a>
                    <p>App version 3.0.a</p>
                </div>

                <button onClick={() => transitionOff()} className="panel-fold-btn"></button>
                <img width="250" src={logo} alt="Wingman logo" />
                <h2>Settings</h2>
                <label id="username">
                    Username :
                    <input type="text"
                        id="usernameInput"
                        defaultValue={username}
                        onBlur={(e) => { updateUsername(e.target.value); }}
                    />
                </label>

                <div className="separator"></div>

                <label id="time-format">
                    Time Format :
                    <select defaultValue={timeFormat}
                        onChange={(e) => { updateTimeFormat(e.target.value) }}>
                        <option value="24">24:00</option>
                        <option value="12">12:00am</option>
                    </select>
                </label>

                <label id="speed-unit">
                    Speed Unit :
                    <select defaultValue={speedUnit}
                        onChange={(e) => { updateSpeedUnit(e.target.value) }}>
                        <option>kph</option>
                        <option>mph</option>
                    </select>
                </label>

                <div className="separator"></div>

                <label id="sending-rate">
                    Sending Rate :
                    <select defaultValue={sendingRate}
                        onChange={(e) => { updateSendingRate(e.target.value) }}>
                        <option value="10">10 hz</option>
                        <option value="5">5 hz</option>
                        <option value="1">1 hz</option>
                    </select>
                </label>
            </div>
        </>
        :
        <button
            className="open-settings-btn"
            onClick={() => transitionOn()}>
        </button>
}
export default SideBar