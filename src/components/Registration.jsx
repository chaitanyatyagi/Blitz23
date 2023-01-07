import "../style/registration.css";
import React from "react";
import blitz from "../images/Blitz_Logo_23.png";
// import close from "../images/Vector.png";
import formCorner from "../images/image76.png";
import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Registration() {
    async function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0].value
        let email = e.target[1].value;
        let password = e.target[2].value;
        const indx = email.indexOf('@')
        const string = email.substr(indx + 1, email.length)
        if (string === 'mnit.ac.in' || string === 'iiitkota.ac.in') {
            axios.post(`${process.env.REACT_APP_SERVER}/users/register`, {
                name, email, password
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status === "error") {
                        window.alert(response.data.message)
                    }
                    else {
                        window.open("/verifyOtp", "_self")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    window.alert("Something went wrong")
                });

        }
        else {
            axios.post(`${process.env.REACT_APP_SERVER}/users/register`, {
                // axios.post(`http://127.0.0.1:2080/users/register`, {
                name, email, password
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status === "error") {
                        window.alert(response.data.message)
                    }
                    else {
                        window.alert("Account Created. Login Now ");
                        window.open("/login", "_self")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <div className="body">
            {/* <Navbar /> */}
            <div className="containerreg">
                <div className="image">
                    <image src={blitz} />
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <image src={formCorner} className="top-right"></image>
                    <image src={formCorner} className="bottom-left"></image>
                    <h1 className="form-heading">Registration</h1>
                    <input
                        className='form-feilds' placeholder='name' name="name">
                    </input>
                    <input
                        className='form-feilds' placeholder='email' type="email" name="email">
                    </input>
                    <input
                        className='form-feilds' placeholder='password' type="password" name="password">
                    </input>
                    <Link to="/login" className="forgot-pass">Already Registered ? Login</Link>
                    <button className="form-submit">Register</button>
                </form>
            </div>
        </div>
    )
}
