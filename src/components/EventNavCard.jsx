import React from "react";
import clubData from "../TestData/clubData";
import "../style/Events.css";

export default function EventNavCards(props) {
	function handleClick() {
		props.onChange(props.text);
	}

	return (
		<div className="event-nav-card" onClick={handleClick}>
			<div
				className={`event-nav-card-${props.active === props.text ? "active" : "inactive"}`}
			>
				{props.text}
			</div>
		</div>
	);
}
