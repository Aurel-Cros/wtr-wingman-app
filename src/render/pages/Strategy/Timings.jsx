import Lines from "../../components/Data/Lines";

export default function Timings() {
    // Get data

    return (
        <div className="box data-box data-col outer align-center">
            <h2>Timings</h2>
            <div className="box data-box">
                <Lines data={[{
                    label: "Current driver",
                    value: "Driver 2"
                },
                {
                    label: "Stint time remaining",
                    value: "35:25"
                }]} />
            </div>
            <div className="box data-box">
                <Lines data={[{
                    label: "Driver 1 time remaining",
                    value: "168:35"
                }, {
                    label: "Driver 2 time remaining",
                    value: "18:35"
                }, {
                    label: "Driver 3 time remaining",
                    value: "48:35"
                }]} />
            </div>
            <div className="box data-box">
                <Lines data={[{
                    label: "Best lap",
                    value: "1:45.541"
                }, {
                    label: "Current lap",
                    value: "1:12.984"
                }, {
                    label: "Current lap pred.",
                    value: "1:46.541"
                }, {
                    label: "Delta to best",
                    value: "+1.000",
                    color: "red"
                }]} />
            </div>
            <div className="box data-box">
                <Lines data={[{
                    label: "Gap to driver in front",
                    value: "+7.941",
                    color: "red"
                }, {
                    label: "Gap to driver behind",
                    value: "-6.644",
                    color: "green"
                }]} />
            </div>
        </div>
    )
}