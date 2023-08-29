import './style.scss';
import TimeInfo from "./TimeInfo"
import GroupInfo from "./GroupInfo"
import LinkInfo from "./LinkInfo"

export default function InfoBar() {
    return (
        <div id="info-bar">
            <TimeInfo />
            <GroupInfo />
            <LinkInfo />
        </div>
    )
}