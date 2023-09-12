import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';

export default function Tyres() {
    return (
        <div className="box data-box layout-col outer">
            <h2>Tyres</h2>
            <div className='data-row'>
                <div className='layout-col outer'>

                    <div className="box data-box">
                        <Lines data={[
                            {
                                label: "Current tyre",
                                value: "Dry"
                            },
                            {
                                label: "Tyre age",
                                value: "164km"
                            }
                        ]} />
                    </div>
                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Core temp",
                            values: [
                                "80°C",
                                "80°C",
                                "80°C",
                                "80°C"
                            ]
                        }} />
                    </div>
                </div>
                <div className='layout-col outer'>

                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Wear",
                            values: [
                                "2.98",
                                "2.98",
                                "2.98",
                                "2.98"
                            ]
                        }} />
                    </div>
                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Slip ratio",
                            values: [
                                "0%",
                                "0%",
                                "0%",
                                "0%"
                            ]
                        }} />
                    </div>
                    <div className="box data-box">
                        <PerTyre data={{
                            label: "Slip angle",
                            values: [
                                "0°",
                                "0°",
                                "0°",
                                "0°"
                            ]
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}