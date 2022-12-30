import "../style/login.css";
import Navbar from "./Navbar";
import React from "react";
import blitz from "../images/IMG-8305.PNG";
// import close from "../images/Vector.png";
import formCorner from "../images/image76.png";
import axios from "axios";

export default function Registration() {
	const [formData, setFormData] = React.useState({
		fullName: "",
		emailId: "",
		teamName: "",
	});

	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	}
	async function handleSubmit(e) {
		setFormData({
			emailId: "",
			password: "",
		});
		let payload = {
			email: formData.emailId,
			password: formData.password,
		};
		const res = await axios({
			method: "POST",
			url: "http://127.0.0.1:2080/users/login",
			payload,
		});
		if (res.status === "success") {
			window.open("/profile");
		}
	}

	return (
		<div className="body">
			<Navbar />
			<div className="container">
				<div className="image">
					<image src={blitz} />
				</div>
				<div className="form">
					<image src={formCorner} className="top-right"></image>
					<image src={formCorner} className="bottom-left"></image>
					<h1 className="form-heading">Login</h1>
					<div className="form-inputs">
						<input
							name="emailId"
							className="form-feilds"
							placeholder="Email-ID / Username"
							value={formData.emailId}
							type="email"
							onChange={(e) => handleChange(e)}
						></input>
						<input
							name="password"
							className="form-feilds"
							placeholder="Password"
							value={formData.password}
							type="password"
							onChange={(e) => handleChange(e)}
						></input>
						<a href="/" className="forgot-pass">
							Forgot Password?
						</a>
					</div>
					<button className="form-submit" onClick={(e) => handleSubmit(e)}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
