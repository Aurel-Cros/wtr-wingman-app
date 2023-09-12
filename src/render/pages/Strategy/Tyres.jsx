import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';

export default function Tyres() {
    return (
        <div className="box data-box data-col outer align-center">
            <h2>Tyres</h2>
            <div className="box data-box ">
                <Lines data={[
                    {
                        label: "Current tyre",
                        value: "Dry"
                    },
                    {
                        label: "Tyre age",
                        value: "100km"
                    }
                ]} />
            </div>
            <div className="box data-box ">
                <PerTyre data={
                    {
                        label: "Live pressures",
                        values: [
                            "26.7",
                            "26.7",
                            "26.8",
                            "26.8"
                        ]
                    }
                } />
            </div>
            <div className="box data-box ">
                <PerTyre data={
                    {
                        label: "Avg pressures",
                        values: [
                            "26.7",
                            "26.7",
                            "26.8",
                            "26.8"
                        ]
                    }
                } />
            </div>
            <div className="box data-box ">
                <PerTyre data={
                    {
                        label: "Last pit values",
                        values: [
                            "25.7",
                            "24.7",
                            "25.8",
                            "24.8"
                        ]
                    }
                } />
            </div>
        </div>
    )
}