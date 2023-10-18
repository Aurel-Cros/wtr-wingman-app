export default function Lines({ data }) {
	return (
		<>
			{data.map((row, i) => (
				<div key={i} className="data-row justify-between">
					<p className="label" title={row.tooltip || ""}>
						{row.label} :
					</p>
					<p className={"data " + (row.color ? row.color : "")}>{row.value}</p>
				</div>
			))}
		</>
	);
}
