export default function PerTyre({ data }) {
    return (
        <div>
            <p className="center label">{data.label}</p>
            <div className="tyres-flex">
                <p className="center data">{data.values[0]}</p>
                <p className="center data">{data.values[1]}</p>
                <p className="center data">{data.values[2]}</p>
                <p className="center data">{data.values[3]}</p>
            </div>
        </div>
    )
}