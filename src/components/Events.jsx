import React from "react";
import "../style/Events.css";
import Navbar from "./Navbar";
import axios from "axios";
import eventimage from "../images/EventTile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import shift from "../images/eventshift.png";
import clubData from "../TestData/clubData";
import EventsNav from "./EventsNav";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import EventsMembersScetion from "./EventsMemeberSection";

export default function Events(props) {
	const navigate = useNavigate();
	// const pay = (amount) => {
	// 	if (props.isLoggedIn) {
	// 		// axios.get(`http://127.0.0.1:2080/paywithpaytm?amount=${amount}`,)
	// 		axios.get(`${process.env.REACT_APP_SERVER}/paywithpaytm?amount=${amount}`,)
	// 			.then(function (response) {
	// 				console.log(response.data);
	// 				props.setresultData(response.data.resultData);
	// 				props.setpaytmFinalUrl(response.data.paytmFinalUrl);
	// 				navigate("/initiatePayment");
	// 				// window.open('/profile', "_self");
	// 			})
	// 			.catch(function (error) {
	// 				console.log(error);
	// 			});
	// 	}
	// 	else {
	// 		window.alert("Please Log In ");
	// 		window.open("/login");
	// 	}

	// }

	const [formData, setFormData] = React.useState({
		name: "",
		college: "",
		blitzID: "",
		email: "",
	});
	const [activeEvent, setActiveEvent] = React.useState(1);
	const [dispForm, setDispForm] = React.useState(false);

	let y = 12;
	let event = clubData[props.club].events[activeEvent - 1];
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

	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	}
	function handleSubmit() {
		console.log(formData);
		setFormData({
			name: "",
			college: "",
			blitzID: "",
			email: "",
		});
		setDispForm(false);
	}
	function handleClose() {
		setFormData({
			name: "",
			college: "",
			blitzID: "",
			email: "",
		});
		setDispForm(false);
	}

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
									<Link
										className="event-link-remover event-card-register-link"
										onClick={() => {
											setDispForm(true);
											// pay(10)
										}}
									>
										REGISTER
									</Link>
								</div>
							)}
						</div >
					</div >
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
							{/* it covers the poster */}
						</div>
					</div>
				</div >
				{dispForm && (
					<div className="events-form-container">
						<div className="events-form">
							<div className="events-form-background">
								<div className="events-form-header">{`Registration - ${event.name}`}</div>
								<div className="row-wrapper-1">
									<input
										className="events-form-text-input"
										placeholder="Name"
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
									<input
										className="events-form-text-input"
										placeholder="College"
										name="college"
										value={formData.college}
										onChange={handleChange}
									/>
								</div>
								<div className="row-wrapper-2">
									<input
										className="events-form-text-input"
										placeholder="BlitzID"
										name="blitzID"
										value={formData.blitzID}
										onChange={handleChange}
									/>
									<input
										className="events-form-text-input"
										placeholder="Email"
										name="email"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div className="row-wrapper-4">
									<input
										className="events-form-text-input"
										value={event.price ? event.price : "--"}
									/>
									<Link
										className="event-link-remover event-card-register-link"
										onClick={handleSubmit}
									>
										SUBMIT
									</Link>
									<Link
										className="event-link-remover event-card-register-link"
										onClick={handleClose}
									>
										CLOSE
									</Link>
								</div>
							</div>
						</div>
					</div>
				)
				}
			</div >
		</div >
	);
}
