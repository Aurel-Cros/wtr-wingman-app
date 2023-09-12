import Lines from '../../components/Data/Lines';
export default function Electronics() {
    return (
        <div className="box data-box data-col align-center outer">
            <h2>Electronics</h2>
            <div className="box data-box">
                <Lines data={[
                    {
                        label: "TC/TC2",
                        value: "1 / 2"
                    },
                    {
                        label: "ABS",
                        value: "4"
                    },
                    {
                        label: "Brake bias",
                        value: "51%"
                    },
                    {
                        label: "Engine map",
                        value: "1"
                    }
                ]} />
            </div>
        </div>
    )
}