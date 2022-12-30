import "../style/registration.css";
import Navbar from "./Navbar";
import React from "react";
import blitz from "../images/IMG-8305.PNG";
// import close from "../images/Vector.png";
import formCorner from "../images/image76.png";
// import axios from "axios"
import { useState } from "react";

export default function Registration() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e) {
		//     let payload = {
		//         name, email, password
		//     }
		//     const res = await axios({
		//         method: 'POST',
		//         url: "http://127.0.0.1:2080/users/register",
		//         payload
		//     }).then(() => {
		//         if (res.status === "success") {
		//             window.open("/profile")
		//         }
		//     }).catch(error => console.log(error))
		console.log("hi");
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
					<h1 className="form-heading">Registration</h1>
					<input
						className="form-feilds"
						placeholder="name"
						event={name}
						onChange={(e) => setName(e.target.value)}
					></input>
					<input
						className="form-feilds"
						placeholder="email"
						event={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<input
						className="form-feilds"
						placeholder="password"
						type="password"
						event={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<button className="form-submit" onClick={handleSubmit}>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
