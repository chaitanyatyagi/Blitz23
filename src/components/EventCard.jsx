import React from "react";
import "../style/eventCard.css";

export default function EventCard(props) {
	return (
		<div className="card-container">
			<div className="event-details">
				<div className="title">
					<h1 className="title-text">Name of Event/Package</h1>
					{/* <h1 className="title-text">Team Name</h1>
					<h1 className="title-text">No. of Members</h1> */}
				</div>
				<div className="detail">
					
					<h1 className="detail-text">:
					{props.name?props.name:""}
					{(props.package1&&props.package1.register)?" - (Envision)":""}
					{(props.package2&&props.package2.register)?" - (Optica)":""}
					{(props.package3&&props.package3.register)?" - (Mirage)":""}
					 </h1>
					{/* <h1 className="detail-text">: {props.teamName}</h1>
					<h1 className="detail-text">: {props.nMembers}</h1> */}
				</div>
			</div>
			{/* <div
				className="event-link"
				onClick={() => {
					console.log("details");
				}}
			>
				View Event Details
			</div> */}
		</div>
	);
}
