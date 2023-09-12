import Lines from '../../components/Data/Lines';
import PerTyre from '../../components/Data/PerTyre';

export default function Strategy() {
    return (
        <div className="box data-box layout-col outer">
            <h2>Pit strategy</h2>
            <div className="box data-box">
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
            <div className="box data-box">
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
            <div className="box data-box ">
                <Lines data={[
                    {
                        label: "Tank size",
                        value: "120L"
                    },
                    {
                        label: "Fuel remaining",
                        value: "99L"
                    },
                    {
                        label: "Fuel to add",
                        value: "120L"
                    },
                    {
                        label: "Fuel after pits",
                        value: "120L"
                    }

                ]} />
            </div>
            <div className="box data-box ">
                <Lines data={[
                    {
                        label: "Brake pads life",
                        value: "90%"
                    },
                    {
                        label: "Brake discs life",
                        value: "99%"
                    },
                    {
                        label: "Change brakes",
                        value: "No"
                    }
                ]} />
            </div>
            <div className="box data-box ">
                <Lines data={[
                    {
                        label: "Time stopped",
                        value: "30s"
                    },
                    {
                        label: "Penalty",
                        value: "0s"
                    },
                    {
                        label: "Time lost in pits",
                        value: "90s"
                    }
                ]} />
            </div>
        </div>
    )
}