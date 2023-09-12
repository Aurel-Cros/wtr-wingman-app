export default function Lines({ data }) {
    return (
        <>
            {data.map((row, i) =>
                <div key={i} className="data-row justify-between">
                    <p className="label">{row.label} :</p>
                    <p className="data">{row.value}</p>
                </div>
            )}
        </>
    )
}