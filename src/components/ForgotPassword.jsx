import "../style/login.css";
import React from "react";
import blitz from "../images/IMG-8305.webp";
import formCorner from "../images/image76.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ForgotPassword() {
    const navigate = useNavigate();
    async function handleSubmit(e) {
        console.log("entered")
        e.preventDefault();
        let payload = {
            email: e.target[0].value
        }
        axios.post(`${process.env.REACT_APP_SERVER}/users/forgotpassword`, payload)
            .then(function (response) {
                if (response.data.status === "error")
                    window.alert(response.data.message)
                else {
                    window.alert(response.data.message)
                    navigate("/resetpassword");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="body">
            <div className="containerlog">
                <div className="image">
                    <image src={blitz} />
                </div>
                <form className="form" onSubmit={handleSubmit} >
                    <image src={formCorner} className="top-right"></image>
                    <image src={formCorner} className="bottom-left"></image>
                    <h1 className="form-heading">Forgot Password</h1>
                    <div className="form-inputs">
                        <input
                            name="email"
                            className="form-feilds"
                            placeholder="Email"
                            type="email"
                        >
                        </input>
                    </div>
                    <button className="form-submit">Send Email</button>
                </form>
            </div>
        </div>
    )
}