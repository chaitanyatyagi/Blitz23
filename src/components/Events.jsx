import React from "react";
import "../style/Events.css";
import Navbar from "./Navbar";
import eventimage from "../images/EventTile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import shift from "../images/eventshift.png";
import clubData from "../TestData/clubData";
import EventsNav from "./EventsNav";
import { Link } from "react-router-dom";

export default function Events(props) {
	const [activeEvent, setActiveEvent] = React.useState(1);
	let event = clubData[props.club].events[activeEvent - 1];
	console.log(event.image);
	let rulesDisp = event.rules.map((x, i) => {
		return (
			<li>
				{i + 1}. {x}
			</li>
		);
	});
	let judgeDisp = event.judging.map((x, i) => {
		return (
			<li>
				{i + 1}. {x}
			</li>
		);
	});
	return (
		<div>
			<div className="events-contanier">
				<div className="events-info-card">
					<div className="events-card-info-container">
						<div className="event-card-margin-manager"></div>
						<div className="events-card-text">
							<div className="event-card-text-head">
								{event.name !== ""
									? event.name
									: "Sorry there seems to be no event"}
							</div>
							{event.description !== "" && (
								<div className="event-card-text-breif">{event.description}</div>
							)}
							{event.rules.length !== 0 && event.judging.length !== 0 && (
								<div className="event-card-text-list">
									{event.rules.length !== 0 && (
										<div className="event-card-text-rules">
											Rules: <div className="events-space" /> {rulesDisp}
										</div>
									)}
									{event.judging.length !== 0 && (
										<div className="event-card-text-judging">
											Judgment Criteria: <div className="events-space" />
											{judgeDisp}
										</div>
									)}
								</div>
							)}
							{event.name !== "" && (
								<div className="event-card-text-register">
									<Link className="event-link-remover event-card-register-link">
										REGISTER
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="events-card-routed-container">
						<div className="events-card-nav-container">
							<EventsNav
								active={activeEvent}
								change={setActiveEvent}
								club={props.club}
							/>
						</div>
						<div className="events-card-img-container">
							<LazyLoadImage
								className="event-card-img"
								src={
									typeof event.image !== "undefined"
										? `/Events/${event.image}`
										: eventimage
								}
							/>
							{/* <Link className="event-link-remover">
								<img
									className="event-card-img-prev"
									src={shift}
									onClick={() => {
										setActiveEvent((prev) => {
											return prev !== 1
												? prev - 1
												: clubData[props.club].events.length;
										});
									}}
								></img>
							</Link>
							<Link className="event-link-remover">
								<img
									className="event-card-img-next"
									src={shift}
									onClick={() => {
										setActiveEvent((prev) => {
											return prev !== clubData[props.club].events.length
												? prev + 1
												: 1;
										});
									}}
								></img>
							</Link> */}
							{/* it covers the poster */}
						</div>
					</div>
				</div>
			</div>
			<Navbar />
		</div>
	);
}
