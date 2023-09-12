import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';
export default function Brakes() {
    return (
        <div className="box data-box layout-col  outer">
            <h2>Brakes</h2>
            <div className="box data-box">
                <Lines data={[
                    {
                        label: "Pads life",
                        value: "91%"
                    },
                    {
                        label: "Dics life",
                        value: "98%"
                    }
                ]} />
            </div>
            <div className="box data-box">
                <PerTyre data={{
                    label: "Temperatures",
                    values: [
                        "940°C",
                        "940°C",
                        "720°C",
                        "720°C"
                    ]
                }} />
            </div>
        </div>
    )
}