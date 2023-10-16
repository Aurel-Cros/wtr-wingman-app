import { formatTime } from "../../../common/util";
import { infoActions } from "../../store/features/infoSlice";
import TimeTicker from "./TimeTicker";
import { useDispatch, useSelector } from "react-redux";

export default function TimeInfo() {
	const dispatch = useDispatch();

	const currentTime = useSelector((state) => state.info.currentTime);
	const sessionTimeLeft = useSelector((state) => state.info.sessionTimeLeft);
	const lastUpdateTime = useSelector((state) => state.info.lastUpdateTime);

	const setCurrentTime = (newCT) => {
		dispatch(infoActions.updateCurrentTime(newCT));
	};

	const setTimeLeft = (newTL) => {
		dispatch(infoActions.updateTimeLeft(newTL));
	};

	return (
		<div className="box" id="time-info">
			<div className="time-row">
				<p className="label">Current time :</p>
				<p className="data">
					<TimeTicker
						$time={currentTime}></TimeTicker>
				</p>
			</div>
			<div className="time-row">
				<p className="label">Time remaining :</p>
				<p className="data">
					<TimeTicker
						$time={sessionTimeLeft}
						asc={false}></TimeTicker>
				</p>
			</div>
			<div className="separator"></div>
			<div className="time-row">
				<p className="label">Last update :</p>
				<p className="data">{formatTime(lastUpdateTime)}</p>
			</div>
		</div>
	);
}
