import { useSelector } from 'react-redux';
import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';

export default function Tyres() {
    const tyresData = useSelector(state => state.telemetry.tyres);

    return (
        <div className="box data-box layout-col outer">
            <h2>Tyres</h2>
            <div className='data-row'>
                <div className='layout-col outer'>

                    <div className="box data-box">
                        <Lines data={[
                            {
                                label: "Current tyre",
                                value: tyresData.rainTyres ? "Wet" : "Dry"
                            },
                            {
                                label: "Tyre age",
                                value: `${tyresData.age}km`
                            }
                        ]} />
                    </div>
                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Core temp",
                            values: [
                                tyresData.coreT[0] + "°C",
                                tyresData.coreT[1] + "°C",
                                tyresData.coreT[2] + "°C",
                                tyresData.coreT[3] + "°C",
                            ]
                        }} />
                    </div>
                </div>
                <div className='layout-col outer'>

                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Wear",
                            values: [
                                tyresData.wear[0] + "mm",
                                tyresData.wear[1] + "mm",
                                tyresData.wear[2] + "mm",
                                tyresData.wear[3] + "mm",
                            ]
                        }} />
                    </div>
                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Slip ratio",
                            values: [
                                tyresData.slipRatio[0] + "%",
                                tyresData.slipRatio[1] + "%",
                                tyresData.slipRatio[2] + "%",
                                tyresData.slipRatio[3] + "%",
                            ]
                        }} />
                    </div>
                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Slip angle",
                            values: [
                                tyresData.slipAngle[0] + "°",
                                tyresData.slipAngle[1] + "°",
                                tyresData.slipAngle[2] + "°",
                                tyresData.slipAngle[3] + "°",
                            ]
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}