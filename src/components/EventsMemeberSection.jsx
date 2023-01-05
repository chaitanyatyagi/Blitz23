import React from "react";
import "../style/Events.css";

export default function EventsMembersScetion(props) {
	function handleChange(e) {
		//props.formData.members[props.i];
	}
	return (
		<div className="events-form-members">
			<div className="row-wrapper-2">
				<input
					className="events-form-text-input"
					name="memName"
					value={props.x.memName}
					placeholder={`Memeber-${props.i + 1} Name`}
					onChange={handleChange}
				/>
				<input
					className="events-form-text-input"
					name="memCollege"
					value={props.x.memCollege}
					placeholder={`Memeber-${props.i + 1} College`}
				/>
			</div>
			<div className="row-wrapper-3">
				<input
					className="events-form-text-input"
					name="memBlitzId"
					value={props.x.memBlitzID}
					placeholder={`Memeber-${props.i + 1} BlitzId`}
				/>
				<input
					className="events-form-text-input"
					name="memEmail"
					value={props.x.memEmail}
					type="email"
					placeholder={`Memeber-${props.i + 1} Email`}
				/>
			</div>
		</div>
	);
}
