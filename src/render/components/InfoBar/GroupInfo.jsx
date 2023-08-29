export default function GroupInfo() {
    const drivers = [
        {
            name: "Driver 1",
            active: false
        },
        {
            name: "Driver 2",
            active: true
        },
        {
            name: "Driver 3",
            active: false
        }
    ];
    const car = "Ferrari 296 GT3";
    const track = "Indianapolis Motorway";



    return (
        <div className="box" id="group-info">
            <p className="group-title">Group details</p>
            <div className="group-row">
                <div id="group-drivers">
                    {
                        drivers.map(driver => {
                            return (
                                <span key={driver.name} className={"subtext" + (driver.active ? " active" : '')}>{driver.name}</span>)
                        }
                        )
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