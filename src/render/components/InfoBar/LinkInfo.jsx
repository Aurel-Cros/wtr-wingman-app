export default function LinkInfo() {
    const groupName = "M4_79"
    return (
        <div className="box" id="link-info">
            <p id="link-acc">ACC Link</p>
            <p id="link-server">Server Link</p>
            <input type="text" placeholder="Group name" value={groupName || null}></input>
        </div>
    )
}