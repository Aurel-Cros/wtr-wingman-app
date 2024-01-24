import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function LinkInfo() {
    const [teamName, setTeamName] = useState(null);
    const [isConnected, setIsConnected] = useState(localStorage.getItem('WSState') || false);
    const username = useSelector(s => s.settings.username)

    useEffect(() => {
        window.connection.onWSState((_e, v) => {
            console.log(v);
            setIsConnected(v);
            localStorage.setItem('WSState', v);
            if (v)
                sendUsername();
        })
    }, []);

    function sendUsername() {
        if (null !== username)
            window.settings.setUsername(username);
    }

    function changeTeamName(value) {
        setTeamName(value);
        window.settings.setTeamName(value);
    }

    return (
        <div className="box" id="link-info">
            <p id="link-acc">ACC Link</p>
            <p className={isConnected ? "connected" : ""}
                id="link-server">Server Link</p>
            <input type="text" placeholder={teamName || "Enter team name"} title="Press Enter to confirm"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        changeTeamName(e.target.value)
                    }
                }}></input>
        </div>
    )
}