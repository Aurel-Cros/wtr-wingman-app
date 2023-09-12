import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';

export default function Strategy() {
    return (
        <div className="box data-box data-col outer align-center">
            <h2>Pit strategy</h2>
            <div className="box data-box inner">
                <Lines data={[
                    {
                        label: "Car damage",
                        value: "0%"
                    },
                    {
                        label: "Repair time",
                        value: "0.0s"
                    }

                ]} />
            </div>
            <div className="box data-box inner">
                <Lines data={[
                    {
                        label: "Tyre selected",
                        value: "Wet"
                    }
                ]} />
                <PerTyre data={{
                    label: "Selected Pressures",
                    values: [
                        "27.0",
                        "27.0",
                        "27.0",
                        "27.0"
                    ]
                }} />
            </div>
        </div>
    )
}