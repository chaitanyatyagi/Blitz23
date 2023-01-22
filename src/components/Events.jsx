import React, { useState } from "react";
import "../style/Events.css";
import eventimage from "../images/EventTile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import clubData from "../TestData/clubData";
import EventsNav from "./EventsNav";
import { Link, useNavigate } from "react-router-dom";
import Payment from "./Payment";
import axios from "axios";
export default function Events(props) {
	// LOGIN POPUP -----
	function login() {
		if (!props.isLoggedIn) {
			window.alert("Please login first.");
			window.open("/login", "_self");
		} else {
			setDispForm(true);
		}
	}
	const navigate = useNavigate();
	const [formData, setFormData] = React.useState({
		name: props.userInfo.name,
		college: "",
		blitzID: props.userInfo.blitzId,
		InstituteId: "",
		phone: "",
		teamName: "",
		Nmembers: "",
		teamLeader: false,
	});
	const [activeEvent, setActiveEvent] = React.useState(1);
	const [dispForm, setDispForm] = React.useState(false);
	const [dispPayment, setDispPayment] = React.useState(false);

	let y = 12;
	let event = clubData[props.club].events[activeEvent - 1];

	// QR CODE ----
	const [qrcode, setQrcode] = React.useState(false);
	const [path, setPath] = useState("");
	let data;
	const [register, setRegister] = React.useState(false);

	React.useEffect(() => {
		if (event.name === "Ramba Samba" || event.name === "Panache") {
			setPath(`/qrcode/600.jpeg`);
			setQrcode(true);
		} else if (event.name === "Blitz Got Talent" || event.name === "Battle of Bands") {
			setPath(`/qrcode/450.jpeg`);
			setQrcode(true);
		} else {
			data = "Right now not accepting payment";
			setQrcode(false);
		}
	}, [event]);
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

	// SENDING REQUESTSS ----
	function handleSubmit(e) {
		e.preventDefault();
		setRegister(true);
		if (props.userInfo.college || !qrcode) {
			axios
				.post(`${process.env.REACT_APP_SERVER}/events/registration`, {
					eventName: event.name,
					userId: props.userInfo._id,
					teamName: formData.teamName,
					members: formData.Nmembers,
					college: props.userInfo.college,
					phone: formData.phone,
					teamLeader: formData.teamLeader,
					register: true,
					InstituteId: formData.InstituteId,
				})
				.then(function (response) {
					if (response.data.status === "error") window.alert(response.data.message);
					else {
						window.alert("registration successfull");
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			setFormData({
				name: props.userInfo.name,
				college: "",
				blitzID: props.userInfo.blitzId,
				InstituteId: "",
				phone: "",
				teamName: "",
				Nmembers: "",
				teamLeader: false,
			});
		} else {
			setDispPayment(true);
		}
		setDispForm(false);
	}
	function handleClose() {
		setFormData({
			name: props.userInfo.name,
			college: "",
			blitzID: props.userInfo.blitzId,
			InstituteId: props.userInfo.instituteId,
			phone: props.userInfo.phone,
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
							{/* {event.rules.length !== 0 && event.judging.length !== 0 && ( */}
							<div className="event-card-text-list">
								{event.rules.length !== 0 ? (
									<div className="event-card-text-rules">
										Rules: <div className="events-space" /> {rulesDisp}
									</div>) : ""
								}
								{event.judging.length !== 0 ? (
									<div className="event-card-text-judging">
										Judgment Criteria: <div className="events-space" />
										{judgeDisp}
									</div>
								) : ""}
							</div>
							{
								event.name === "Flashmob" ? "" : <Link
									className="event-link-remover event-card-register-link"
									onClick={() => {
										login();
									}}
								>
									REGISTER
								</Link>
							}
						</div>
					</div>
					<div className="events-card-routed-container">
						<div className="events-mobile-view-manager"></div>
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
										placeholder="InstituteId"
										name="InstituteId"
										value={formData.InstituteId}
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
								<div className="events-form-check-row">
									Note: Please mention "None" in Team Name if this is an
									Individual Event and 1 as number of Team Members.
								</div>
								<div className="events-form-check-row">
									Note: Choose your Package wisely. We'll Suggest you to take a
									glimpse at our combo packages(Optica and Mirage) to avail
									exciting discounts. For reference visit:
									blitzschlag.co.in/accomodation .
								</div>
								<div className="row-wrapper-4">
									<input
										className="events-form-text-input"
										value={`Price : ${event.price ? event.price : "--"}`}
									/>
									{qrcode && !props.userInfo.college ? (
										<button className="event-link-remover event-card-register-link">
											PAY NOW
										</button>
									) : (
										<button className="event-link-remover event-card-register-link">
											SUBMIT
										</button>
									)}
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
				{dispPayment && (
					<Payment
						eventName={event.name}
						userId={props.userInfo._id}
						setDispPayment={setDispPayment}
						path={path}
						qrcode={qrcode}
						data={data}
						members={formData.Nmembers}
						teamName={formData.teamName}
						phone={formData.phone}
						teamLeader={formData.teamLeader}
						register={register}
						InstitudeId={formData.InstitudeId}
					/>
				)}
			</div>
		</div>
	);
}
