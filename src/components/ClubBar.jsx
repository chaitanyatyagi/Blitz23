import React from "react";
import "../style/Club.css";
import clubData from "../TestData/clubData";
import ClubBarCards from "./ClubBarCards";

export default function ClubBar(props) {
	let i = 1;
	let arr = [];
	while (i <= clubData.length - 2) {
		arr.push(i);
		i += 1;
	}
	const dispCard = arr.map((x) => {
		return (
			<div>
				<ClubBarCards text={x} active={props.active} onChange={props.onChange} />
			</div>
		);
	});
	return <div className="club-bar">{dispCard}</div>;
}
