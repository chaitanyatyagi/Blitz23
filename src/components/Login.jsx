import "../style/login.css";
import Navbar from "./Navbar";
import React from "react";
import blitz from "../images/IMG-8305.PNG";
import formCorner from "../images/image76.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function Registration(props) {
	const navigate = useNavigate();
	async function handleSubmit(e) {
		e.preventDefault();
		let payload = {
			email: e.target[0].value,
			password: e.target[1].value
		}
		axios.post('http://127.0.0.1:2080/users/login', payload)
			.then(function (response) {
				console.log(response.data);
				if (response.data.status === "error")
					window.alert(response.data.message)
				else {
					props.setIsLoggedIn(true);
					cookies.set('jwt', response.data.token, { path: '/' });
					navigate("/profile");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className="body">
			{/* <Navbar /> */}
			<div className="containerlog">
				<div className="image">
					<image src={blitz} />
				</div>
				<form className="form" onSubmit={handleSubmit} >
					<image src={formCorner} className="top-right"></image>
					<image src={formCorner} className="bottom-left"></image>
					<h1 className="form-heading">Login</h1>
					<div className="form-inputs">
						<input
							name="email"
							className="form-feilds"
							placeholder="Email-ID / Username"
							type="email"
						>
						</input>
						<input
							name="password"
							className="form-feilds"
							placeholder="Password"
							type="password"
						>
						</input>
						<a href="/" className="forgot-pass">Forgot Password?</a>
					</div>
					<button className="form-submit" >Login</button>
				</form>
			</div>
		</div>
	)
}
