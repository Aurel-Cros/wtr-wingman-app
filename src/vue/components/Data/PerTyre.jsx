import { memo } from "react";

export default memo(
	function PerTyre({ data }) {
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
		);
	},
	(oldProps, newProps) => {
		return (
			oldProps.data.length === newProps.data.length &&
			oldProps.data[0].value === newProps.data[0].value &&
			oldProps.data[1].value === newProps.data[1].value &&
			oldProps.data[2].value === newProps.data[2].value &&
			oldProps.data[3].value === newProps.data[3].value
		);
	}
);
