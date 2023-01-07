import React, { useState } from "react";
import "../style/Events.css";
import eventimage from "../images/EventTile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import clubData from "../TestData/clubData";
import EventsNav from "./EventsNav";
import { Link, useNavigate } from "react-router-dom";
import Payment from "./Payment";
export default function Events(props) {

	function login() {
		if (!props.isLoggedIn) {
			window.alert("Please Register/Login")
			window.open("/register", "_self")
		}
		else {
			setDispForm(true)
		}
	}
	const navigate = useNavigate();
	const [formData, setFormData] = React.useState({
		name: props.userInfo.name,
		college: "",
		blitzID: props.userInfo.blitzId,
		email: "",
		phone: "",
		teamName: "",
		Nmembers: "",
		teamLeader: true,
	});
	const [activeEvent, setActiveEvent] = React.useState(1);
	const [dispForm, setDispForm] = React.useState(false);
	const [dispPayment, setDispPayment] = React.useState(false)

	let y = 12;
	let event = clubData[props.club].events[activeEvent - 1];
	const [qrcode, setQrcode] = React.useState(false)
	const [path,setPath]=useState("/qrcode/events.jpeg");
	let data
	React.useEffect(() => {
		if (event.name === "Ramba Samba" || event.name === "Blitz Got Talent" || event.name === "Battle of Bands" || event.name === "Panache") {
			setPath(`/qrcode/flagship.jpeg`);
			setQrcode(true)
		}
		else {
			data = "Right now not accepting payment"
		}
	}, [])
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
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	function handleSubmit(e) {
		e.preventDefault()
		setFormData({
			name: props.userInfo.name,
			college: "",
			blitzID: props.userInfo.blitzId,
			email: "",
			phone: "",
			teamName: "",
			Nmembers: "",
			teamLeader: true,
		});
		setDispForm(false);
		setDispPayment(true)
	}
	function handleClose() {
		setFormData({
			name: props.userInfo.name,
			college: "",
			blitzID: props.userInfo.blitzId,
			email: "",
			phone: "",
			teamName: "",
			Nmembers: "",
			teamLeader: true,
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
							{/* {event.name !== "" && (
								<div className="event-card-text-register">
									<Link
										className="event-link-remover event-card-register-link"
										onClick={() => {
											login();
										}}
									>
										REGISTER
									</Link>
								</div>
							)} */}
							{
								event.name === "Panache" || event.name === "Tamasha" || event.name === "Bhaavna" || event.name === "Acta Diurna" ? <div className="event-card-text-register">
									<Link
										className="event-link-remover event-card-register-link"
										onClick={() => {
											login();
										}}
									>
										REGISTER
									</Link>
								</div> : <div className="event-link-remover event-card-register-link">Registration will start soon</div>
							}
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
						</div>
					</div>
				</div>
				{dispForm && (
					<form className="events-form-container" onSubmit={handleSubmit}>
						<div className="events-form">
							<div className="events-form-background">
								<div className="events-form-header">{`Registration - ${event.name}`}</div>
								<div className="row-wrapper-1">
									<input
										className="events-form-text-input"
										placeholder="Name of Participant"
										name="name"
										value={props.userInfo.name}
										onChange={() => { }}
										required={true}
									/>
									<input
										className="events-form-text-input"
										placeholder="Name of institute"
										name="college"
										value={formData.college}
										onChange={handleChange}
										required={true}
									/>
								</div>
								<div className="row-wrapper-2">
									<input
										className="events-form-text-input"
										placeholder="BlitzID"
										name="blitzID"
										value={props.userInfo.blitzId}
										onChange={() => { }}
										required={true}
									/>
									<input
										className="events-form-text-input"
										placeholder="Email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required={true}
									/>
								</div>
								<div className="row-wrapper-2">
									<input
										className="events-form-text-input"
										placeholder="Phone Number"
										name="phone"
										type="tel"
										value={formData.phone}
										onChange={handleChange}
										required={true}
									/>
									<input
										className="events-form-text-input"
										placeholder="Name of Team"
										name="teamName"
										value={formData.teamName}
										onChange={handleChange}
										required={true}
									/>
								</div>
								<div className="row-wrapper-2">
									<input
										className="events-form-text-input"
										placeholder="No. of Memebers"
										name="Nmembers"
										type="number"
										value={formData.Nmembers}
										onChange={handleChange}
										required={true}
									/>
									<div className="events-form-check-row">
										<label htmlFor="teamLeader" className="events-labels">
											Are you the Team Leader ?
										</label>
										<input
											type="checkbox"
											name="teamLeader"
											checked={formData.teamLeader}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="row-wrapper-4">
									<input
										className="events-form-text-input"
										value={`Price : ${event.price ? event.price : "--"}`}
									/>
									<button
										className="event-link-remover event-card-register-link"
									>
										PAY NOW
									</button>
									<Link
										className="event-link-remover event-card-register-link"
										onClick={handleClose}
									>
										CLOSE
									</Link>
								</div>
							</div>
						</div>
					</form>
				)}
				{
					dispPayment && (
						<Payment eventName={event.name} userId={props.userInfo._id} setDispPayment={setDispPayment} path={path} qrcode={qrcode} data={data} />
					)
				}
			</div>
		</div>
	);
}