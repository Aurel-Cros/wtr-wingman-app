import Lines from '../../components/Data/Lines';

export default function Fuel() {
    return (
        <div className="box data-box layout-col outer">
            <h2>Fuel</h2>
            <div className="box data-box ">
                <Lines data={[
                    {
                        label: "Fuel used this stint",
                        value: "21L"
                    },
                    {
                        label: "Fuel remaining",
                        value: "99L"
                    },
                    {
                        label: "Fuel per lap",
                        value: "3.4L"
                    },
                    {
                        label: "Laps remaining",
                        value: "27"
                    }
                ]} />
            </div>
        </div>
    )
}