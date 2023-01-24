import React from "react";
import "../style/howtoregister.css";

export default function HowToRegister() {
	return (
		<div className="howtoregister">
			<div className="how2reginsmar"></div>
			<div className="how2regins">
				<div className="how2reginshead">How to create an account in the website?</div>
				<video src="/video/1.mp4" playing controls className="video-div"></video>
			</div>
			<div className="how2regins">
				<div className="how2reginshead">
					How to register in an event (for MNIT Jaipur & IIIT Kota students)?
				</div>
				<video src="/video/2.mp4" playing controls className="video-div"></video>
			</div>
			<div className="how2regins">
				<div className="how2reginshead">
					How to register in an event (for NON MNIT Jaipur & NON IIIT Kota students in
					DESKTOP)?
				</div>
				<video src="/video/3.mp4" playing controls className="video-div"></video>
			</div>
			<div className="how2regins">
				<div className="how2reginshead">
					How to register in an event (for NON MNIT Jaipur & NON IIIT Kota students in
					ANDROID)?
				</div>
				<video src="/video/4.mp4" playing controls className="video-div"></video>
			</div>
		</div>
	);
}
