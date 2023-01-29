import React from "react";
import clubData from "../TestData/clubData";
import EventNavCard from "./EventNavCard";
import "../style/Events.css";

export default function EventsNav(props) {
	let i = clubData[props.club].events.length;
	let arr = [];
	while (i > 0) {
		arr.push(i);
		i -= 1;
	}
	arr.reverse();
	let dispNav = arr.map((x, i) => {
		if (clubData[props.club].events[i].day.includes(props.day))
			return <EventNavCard text={x} active={props.active} onChange={props.change} />;
	});
	return <div className="events-card-nav">{dispNav}</div>;
}
