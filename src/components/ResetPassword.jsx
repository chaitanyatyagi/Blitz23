import "../style/registration.css";
import React from "react";
import blitz from "../images/Blitz_Logo_23.webp";
import formCorner from "../images/image76.webp";
import axios from "axios";

export default function ResetPassword() {
	async function handleSubmit(e) {
		e.preventDefault();
		let newpassword = e.target[0].value;
		let confirmpassword = e.target[1].value;
		let otp = e.target[2].value;
		axios
			.post(`${process.env.REACT_APP_SERVER}/users/resetpassword`, {
				newpassword,
				confirmpassword,
				otp,
			})
			.then(function (response) {
				if (response.data.status === "error") window.alert(response.data.message);
				else {
					window.alert("Password Updated");
					window.open("/", "_self");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className="body">
			<div className="containerreg">
				<div className="image">
					<image src={blitz} />
				</div>
				<form className="form" onSubmit={handleSubmit}>
					<image src={formCorner} className="top-right"></image>
					<image src={formCorner} className="bottom-left"></image>
					<h1 className="form-heading">Reset Password</h1>
					<input
						className="form-feilds"
						placeholder="NEW PASSWORD"
						type="password"
						name="NEWPASSWORD"
					></input>
					<input
						className="form-feilds"
						placeholder="CONFIRM PASSWORD"
						type="password"
						name="CONFIRMPASSWORD"
					></input>
					<input
						className="form-feilds"
						placeholder="OTP"
						type="number"
						name="OTP"
					></input>
					<button className="form-submit">Update Password</button>
				</form>
			</div>
		</div>
	);
}
