import { useSelector } from "react-redux";
import Lines from "../../components/Data/Lines";
import PerTyre from "../../components/Data/PerTyre";

export default function Strategy() {
	const pitMenu = useSelector(state => state.strategy.pitMenu);
	const currentFuel = useSelector(state => state.strategy.fuel.remaining);

	const brakesLife = useSelector(state => state.telemetry.brakes.life);

	const timeStopped =
		pitMenu.repairTime +
		Math.max(Number(pitMenu.tyres.change) * 30, pitMenu.fuelToAdd > 0 ? 3 + pitMenu.fuelToAdd * 0.2 : 0);

	return (
		<div className="box data-box layout-col outer">
			<h2>Pit strategy</h2>
			<div className="box data-box">
				<Lines
					data={[
						{
							label: "Car damage",
							value: pitMenu.damage + "%",
						},
						{
							label: "Repair time",
							value: pitMenu.repairTime + "s",
						},
					]}
				/>
			</div>
			<div className="box data-box">
				<Lines
					data={[
						{
							label: "Tyre selected",
							value: pitMenu.tyres.selectedType,
						},
					]}
				/>
				<PerTyre
					data={{
						label: "Selected Pressures",
						values: pitMenu.tyres.pressures,
					}}
				/>
			</div>
			<div className="box data-box ">
				<Lines
					data={[
						{
							label: "Tank size",
							value: pitMenu.maxFuel + "L",
						},
						{
							label: "Fuel to add",
							value: pitMenu.fuelToAdd + "L",
						},
						{
							label: "Fuel after pits",
							value: Math.max(pitMenu.maxFuel, pitMenu.fuelToAdd + currentFuel) + "L",
						},
					]}
				/>
			</div>
			<div className="box data-box ">
				<Lines
					data={[
						{
							label: "Brake pads life",
							value: brakesLife.pads + "%",
						},
						{
							label: "Brake discs life",
							value: brakesLife.discs + "%",
						},
						{
							label: "Change brakes",
							value: pitMenu.changeBrakes ? "Yes" : "No",
						},
					]}
				/>
			</div>
			<div className="box data-box ">
				<Lines
					data={[
						{
							label: "Time stopped",
							value: timeStopped + "s",
						},
						{
							label: "Penalty",
							value: pitMenu.penaltyTime + "s",
						},
						{
							label: "Time lost in pits",
							value: timeStopped + 30 + "s",
							tooltip:
								"Estimated, varies from track to track.\r\nThis estimation assumes the car is rolling in pits for 30s.\r\nDoes not account for driver swaps.",
						},
					]}
				/>
			</div>
		</div>
	);
}
