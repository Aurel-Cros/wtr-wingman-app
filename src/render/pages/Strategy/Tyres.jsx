import { useSelector } from "react-redux";
import Lines from "../../components/Data/Lines";
import PerTyre from "../../components/Data/PerTyre";

export default function Tyres() {
	const currentTyre = useSelector(state => state.telemetry.tyres.type);
	const tyreSet = useSelector(state => state.telemetry.tyres.currentSet);
	const tyreAge = useSelector(state => state.telemetry.tyres.age);
	const livePressures = useSelector(state => state.telemetry.tyres.livePressures);
	const averagePressures = useSelector(state => state.telemetry.tyres.avgPressuresDuringStint);
	const lastPitValues = useSelector(state => state.strategy.tyres.lastPitValues);
	return (
		<div className="box data-box layout-col outer">
			<h2>Tyres</h2>
			<div className="box data-box ">
				<Lines
					data={[
						{
							label: "Current tyre",
							value: currentTyre + (Number.isInteger(tyreSet) ? " "+tyreSet : ""),
						},
						{
							label: "Tyre age",
							value: tyreAge + "km",
						},
					]}
				/>
			</div>
			<div className="box data-box ">
				<PerTyre
					data={{
						label: "Live pressures",
						values: livePressures,
					}}
				/>
			</div>
			<div className="box data-box ">
				<PerTyre
					data={{
						label: "Avg pressures",
						values: averagePressures,
					}}
				/>
			</div>
			<div className="box data-box ">
				<PerTyre
					data={{
						label: "Last pit values",
						values: lastPitValues,
					}}
				/>
			</div>
		</div>
	);
}
