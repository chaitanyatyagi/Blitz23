import React from "react";
import "../style/Events.css";
import Navbar from "./Navbar";
import eventimage from "../images/EventTile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import shift from "../images/eventshift.png";
import clubData from "../TestData/clubData";
import EventsNav from "./EventsNav";
import EventsMembersScetion from "./EventsMemeberSection";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
export default function Events(props) {
	// const [formData, setFormData] = React.useState({
	// 	name: "",
	// 	Nmembers: 1,
	// 	members: [
	// 		{
	// 			memName: "",
	// 			memCollege: "",
	// 			memBlitzID: "",
	// 			memEmail: "",
	// 		},
	// 	],
	// });
	const navigate=useNavigate();
	// console.log(props.userInfo)
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

	let y = 12;
	// console.log(clubData[props.club])
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
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	// function dispMembers() {
	// 	setFormData((prev) => {
	// 		return { ...prev, members: [] };
	// 	});
	// 	for (let i = 1; i <= formData.Nmembers; i++) {
	// 		setFormData((prev) => {
	// 			return {
	// 				...prev,
	// 				members: [
	// 					...prev.members,
	// 					{
	// 						memName: "",
	// 						memCollege: "",
	// 						memBlitzID: "",
	// 						memEmail: "",
	// 					},
	// 				],
	// 			};
	// 		});
	// 	}
	// 	let Members = formData.members.map((x, i) => {
	// 		return <EventsMembersScetion x={x} i={i} formData={formData} setter={setFormData} />;
	// 	});
	// 	return Members;
	// }
	function handleSubmit(e) {
		e.preventDefault()
		//post request to backend
		console.log(formData);
		axios.post(`${process.env.REACT_APP_SERVER}/users/registration`, {...formData,eventName:event.name,blitzID: props.userInfo.blitzId,name:props.userInfo.name})
			.then(function (response) {
				// console.log(response.data);
				if (response.data.status === "error")
					window.alert(response.data.message)
				else {
					window.alert("registration successfull");
					navigate("/profile");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		//reset form
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
							{event.name !== "" && (
								<div className="event-card-text-register">
									<Link
										className="event-link-remover event-card-register-link"
										onClick={() => {
											setDispForm(true);
										}}
									>
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
										onChange={()=>{}}
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
										onChange={()=>{}}
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

								{/* <div className="events-selector-label">
										<label htmlFor="members" className="events-labels">
											No of Members
										</label>
										<select
											className="events-member-selection"
											name="Nmembers"
											value={formData.Nmembers}
											onChange={handleChange}
										>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
											<option value={6}>6</option>
											<option value={7}>7</option>
											<option value={8}>8</option>
											<option value={9}>9</option>
											<option value={10}>10</option>
										</select>
									</div>
								</div>
								<div className="events-form-members">{dispMembers}</div> */}
								<div className="row-wrapper-4">
									<input
										className="events-form-text-input"
										value={`Price : ${event.price ? event.price : "--"}`}
									/>
									<button
										className="event-link-remover event-card-register-link"
										// onClick={handleSubmit}
									>
										SUBMIT
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
			</div>
		</div>
	);
}