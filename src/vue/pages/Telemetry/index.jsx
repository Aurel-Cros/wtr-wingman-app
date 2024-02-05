import Brakes from "./Brakes";
import Electronics from "./Electronics";
import Tyres from "./Tyres";

export default function Telemetry() {

    return (
        <>
            <div className="layout-col">
                <Electronics />
            </div>
            <div className="layout-col">
                <Brakes />
            </div>
            <div className="layout-col">
                <Tyres />
            </div>
        </>
    )
}