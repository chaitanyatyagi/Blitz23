import React from "react";
import "../style/Club.css";
import ClubBarCards from "./ClubBarCards";

export default function ClubBar(props) {
	let i = 9;
	let small = window.matchMedia("(max-width: 1000px)").matches;
	let dec = -1;
	let arr = [];
	while (i <= 9) {
		arr.push(i);
		if (small && i === 0) {
			break;
		}
		if (i === 0) {
			dec = 1;
		}
		i += dec;
	}
	const dispCard = arr.map((x) => {
		return <ClubBarCards text={x} active={props.active} onChange={props.onChange} />;
	});
	return <div className="club-bar">{dispCard}</div>;
}
