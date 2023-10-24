import { memo } from "react";

export default memo(
	function Lines({ data }) {
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
	},
	(oldProps, newProps) => {
		return (
			oldProps.data.length === newProps.data.length &&
			oldProps.data[0].value === newProps.data[0].value &&
			oldProps.data[1].value === newProps.data[1].value
		);
	}
);
