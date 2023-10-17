import { useSelector } from "react-redux";
import Lines from "../../components/Data/Lines";

export default function Fuel() {
	const fuel = useSelector(state => state.strategy.fuel);
	const lapsLeft = Math.floor(fuel.remaining / fuel.perLap) || 0;

	return (
		<div className="box data-box layout-col outer">
			<h2>Fuel</h2>
			<div className="box data-box ">
				<Lines
					data={[
						{
							label: "Fuel used this stint",
							value: fuel.usedThisStint,
						},
						{
							label: "Fuel remaining",
							value: fuel.remaining,
						},
						{
							label: "Fuel per lap",
							value: fuel.perLap,
						},
						{
							label: "Laps remaining",
							value: lapsLeft,
						},
					]}
				/>
			</div>
		</div>
	);
}
