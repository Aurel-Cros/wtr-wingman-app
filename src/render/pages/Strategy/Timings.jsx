import { useSelector } from "react-redux";
import Lines from "../../components/Data/Lines";
import { formatDelta, formatDuration, formatLaptime, formatTime } from "../../../common/util";

export default function Timings() {
	// Get data
	const drivers = useSelector(state => state.info.drivers);
	const currentDriverId = useSelector(state => state.info.currentDriverId);
	const currentDriver = drivers.find(d => d.id === currentDriverId) || {
		id: null,
		name: "",
		drivingTimeLeft: 0,
	};

	const racingTimers = useSelector(state => state.strategy.racingTimers);

	return (
		<div className="box data-box layout-col outer">
			<h2>Timings</h2>
			<div className="box data-box">
				<Lines
					data={[
						{
							label: "Current driver",
							value: currentDriver.name,
						},
						{
							label: "Stint time remaining",
							value: formatDuration(racingTimers.stintRemaining),
						},
					]}
				/>
			</div>
			<div className="box data-box">
				{drivers.length ? (
					<Lines
						data={drivers.map(driver => ({
							label: `${driver.name} time remaining`,
							value: driver.drivingTimeLeft,
						}))}
					/>
				) : (
					<p className="label">No driver found.</p>
				)}
			</div>
			<div className="box data-box">
				<Lines
					data={[
						{
							label: "Best lap",
							value: formatLaptime(racingTimers.bestLap),
						},
						{
							label: "Current lap",
							value: formatLaptime(racingTimers.currentLap),
						},
						{
							label: "Current lap pred.",
							value: formatLaptime(racingTimers.currentPred),
						},
						{
							label: "Delta to best",
							value: formatDelta(racingTimers.deltaToBest),
							color: racingTimers.deltaToBest > 0 ? "green" : racingTimers.deltaToBest < 0 ? "red" : "",
						},
					]}
				/>
			</div>
			<div className="box data-box">
				<Lines
					data={[
						{
							label: "Gap to driver in front",
							value: formatDelta(racingTimers.gapToFront, 1),
							color: racingTimers.gapToFront > 0 ? "green" : racingTimers.gapToFront < 0 ? "red" : "",
						},
						{
							label: "Gap to driver behind",
							value: formatDelta(racingTimers.gapToBehind, 1),
							color: racingTimers.gapToBehind > 0 ? "green" : racingTimers.gapToBehind < 0 ? "red" : "",
						},
					]}
				/>
			</div>
		</div>
	);
}
