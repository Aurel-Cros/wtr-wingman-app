import { useSelector } from 'react-redux';
import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';
export default function Brakes() {
    const brakesData = useSelector(state => state.telemetry.brakes)
    return (
        <div className="box data-box layout-col  outer">
            <h2>Brakes</h2>
            <div className="box data-box">
                <Lines data={[
                    {
                        label: "Pads life",
                        value: `${brakesData.life.pads}%`
                    },
                    {
                        label: "Discs life",
                        value: `${brakesData.life.discs}%`
                    }
                ]} />
            </div>
            <div className="box data-box">
                <PerTyre data={{
                    label: "Temperatures",
                    values: [
                        `${brakesData.temps[0]}°C`,
                        `${brakesData.temps[1]}°C`,
                        `${brakesData.temps[2]}°C`,
                        `${brakesData.temps[3]}°C`,
                    ]
                }} />
            </div>
        </div>
    )
}