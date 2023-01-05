import React from "react";
import clubData from "../TestData/clubData";
import "../style/Club.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function ClubBarCards(props) {
	const [over, setOver] = React.useState(false);
	function handleClick() {
		props.onChange(props.text);
	}

	return (
		<div
			className="club-bar-card"
			onClick={handleClick}
			onMouseEnter={() => {
				setOver(true);
			}}
			onMouseLeave={() => {
				setOver(false);
			}}
		>
			{over && <div className="club-bar-card-name">{clubData[props.text].title}</div>}
			<div className={`club-bar-card-${props.active === props.text ? "active" : "inactive"}`}>
				{props.text}
			</div>
		</div>
	);
}
