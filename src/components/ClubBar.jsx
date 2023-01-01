import React from "react";
import "../style/Club.css";
import ClubBarCards from "./ClubBarCards";

export default function ClubBar(props) {
	let i = 1;
	let arr = [];
	while (i <= 19) {
		arr.push(i);
		i += 1;
	}
	const dispCard = arr.map((x) => {
		return <ClubBarCards text={x} active={props.active} onChange={props.onChange} />;
	});
	return <div className="club-bar">{dispCard}</div>;
}
