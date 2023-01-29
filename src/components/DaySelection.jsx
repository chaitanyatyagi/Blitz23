import React from "react";
import { Link } from "react-router-dom";
import "../style/DaySelection.css";

export default function DaySelection(props) {
	let activeDay = props.day;
	let setDay = props.setDay;
	function NavTile(props) {
		const [over, setOver] = React.useState(false);
		return (
			<div
				className={`nav-tile-${props.index == activeDay ? "active" : "inactive"}`}
				onMouseEnter={() => {
					setOver(true);
				}}
				onMouseLeave={() => {
					setOver(false);
				}}
				onClick={() => {
					setDay(props.index);
				}}
			>
				{!over ? `Day ${props.index}` : `${props.index + 9}th Feb`}
			</div>
		);
	}

	let nav = [];
	for (let i = 0; i < 4; i++) {
		nav.push(<NavTile index={i} key={i} />);
	}

	return (
		<div className="day-selection-container">
			<div className="day-selection-options">{nav}</div>
			<Link to="/events" className="day-selection-btn">
				Continue
			</Link>
		</div>
	);
}
