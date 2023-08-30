import { useState } from "react";
export default function LinkInfo() {
    const [groupName, setGroupName] = useState(null);

    function changeGroupName(value) {
        setGroupName(value);
        window.settings.setGroupName(value);
    }

    return (
        <div className="box" id="link-info">
            <p id="link-acc">ACC Link</p>
            <p id="link-server">Server Link</p>
            <input type="text" placeholder={groupName || "Enter group name"} title="Press Enter to confirm" onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    changeGroupName(e.target.value)
                    e.target.value = '';
                }
            }}></input>
        </div>
    )
}