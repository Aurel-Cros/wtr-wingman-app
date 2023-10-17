import { useSelector } from "react-redux";
import "./style.scss";
export default function Flag() {
	// GET FLAG

	const getFlag = useSelector(state => state.strategy.flag);
	const flagClasses = {
		AC_NO_FLAG: "green",
		AC_BLUE_FLAG: "blue",
		AC_YELLOW_FLAG: "yellow",
		AC_BLACK_FLAG: "black",
		AC_WHITE_FLAG: "white",
		AC_CHECKERED_FLAG: "checkered",
		AC_PENALTY_FLAG: "bw",
		ACC_GREEN_FLAG: "green",
		ACC_ORANGE_FLAG: "orange",
	};
	const flag = flagClasses[getFlag];

	let checkeredFlag = [];
	let color = 0;
	for (let i = 0; i < 36; i++) {
		const square = <p className={"color" + (color + 1)} key={i}></p>;
		checkeredFlag.push(square);
		color = color ? 0 : 1;
	}

	return (
		<div className="box data-box data-row justify-center">
			<div className={`flag ${flag !== "checkered" ? flag : ""}`}>
				{flag === "checkered" ? checkeredFlag.map(a => a) : null}
			</div>
		</div>
	);
}
