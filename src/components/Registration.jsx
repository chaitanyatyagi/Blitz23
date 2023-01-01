import "../style/registration.css";
import React from "react";
import blitz from "../images/Blitz_Logo_23.png";
// import close from "../images/Vector.png";
import formCorner from "../images/image76.png";
import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        // let name = e.target[0].value
        // let email = e.target[1].value;
        // let password = e.target[2].value;
        axios.post('http://127.0.0.1:2080/users/register', {
            name, email, password
        })
            .then(function (response) {
                console.log(response);
                if (response.data.status === "error")
                    window.alert(response.data.message)
                else {
                    window.alert("Account Created. Login Now ");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="body">
            {/* <Navbar /> */}
            <div className="containerreg">
                <div className="image">
                    <image src={blitz} />
                </div>
                <div className="form">
                    <image src={formCorner} className="top-right"></image>
                    <image src={formCorner} className="bottom-left"></image>
                    <h1 className="form-heading">Registration</h1>
                    <input
                        className='form-feilds' placeholder='name' event={name} onChange={(e) => setName(e.target.value)}>
                    </input>
                    <input
                        className='form-feilds' placeholder='email' event={email} onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        className='form-feilds' placeholder='password' type="password" event={password} onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <Link to="/login" className="forgot-pass">Already Registered ? Login</Link>
                    <button className="form-submit" onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
}
