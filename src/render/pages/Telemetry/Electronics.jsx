import { useSelector } from 'react-redux';
import Lines from '../../components/Data/Lines';
export default function Electronics() {
    const electronics = useSelector(state => state.telemetry.electronics);
    console.log(electronics);
    return (
        <div className="box data-box layout-col outer">
            <h2>Electronics</h2>
            <div className="box data-box">
                <Lines data={[
                    {
                        label: "TC/TC2",
                        value: `${electronics.tc} / ${electronics.tc2}`
                    },
                    {
                        label: "ABS",
                        value: electronics.abs
                    },
                    {
                        label: "Brake bias",
                        value: `${electronics.bbias}%`
                    },
                    {
                        label: "Engine map",
                        value: electronics.emap
                    }
                ]} />
            </div>
        </div>
    )
}