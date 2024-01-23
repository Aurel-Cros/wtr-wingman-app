import { useEffect, useState } from "react";
export default function LinkInfo() {
    const [groupName, setGroupName] = useState(null);
    const [isConnected, setIsConnected] = useState(localStorage.getItem('WSState') || false);

    useEffect(() => {
        window.connection.onWSState((_e, v) => {
            console.log(v);
            setIsConnected(v);
            localStorage.setItem('WSState', v);
        })
    }, []);

    function changeGroupName(value) {
        setGroupName(value);
        window.settings.setGroupName(value);
    }

    return (
        <div className="box" id="link-info">
            <p id="link-acc">ACC Link</p>
            <p className={isConnected ? "connected" : ""}
                id="link-server">Server Link</p>
            <input type="text" placeholder={groupName || "Enter group name"} title="Press Enter to confirm"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        changeGroupName(e.target.value)
                        e.target.value = '';
                    }
                }}></input>
        </div>
    )
}