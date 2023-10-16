import { useSelector } from "react-redux";

export default function GroupInfo() {
    const drivers = useSelector(state => state.info.drivers);
    const currentDriverId = useSelector(state => state.info.currentDriverId);
    const car = useSelector(state => state.info.carModel);
    const track = useSelector(state => state.info.trackName);

    return (
        <div className="box" id="group-info">
            <p className="group-title">Group details</p>
            <div className="group-row">
                <div id="group-drivers">
                    {
                        drivers.length ? drivers.map(driver => {
                            return (
                                <span key={driver.id} className={"subtext" + (driver.id === currentDriverId ? " active" : '')}>{driver.name}</span>)
                        }
                        )
                            :
                            <span>No driver found.</span>
                    }
                </div>
                <div id="group-car-track">
                    <p id="group-car">{car}</p>
                    <p id="group-track">{track}</p>
                </div>
            </div>
        </div>
    )
}