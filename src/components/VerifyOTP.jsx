import "../style/registration.css";
import React from "react";
import blitz from "../images/Blitz_Logo_23.png";
import formCorner from "../images/image76.png";
import axios from "axios"

export default function VerifyOTP() {
    async function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0].value
        let email = e.target[1].value;
        let otp = e.target[2].value
        axios.post(`${process.env.REACT_APP_SERVER}/users/verifyOtp`, {
            name, email, otp,
        })
            .then(function (response) {
                if (response.data.status === "error") {
                    window.alert(response.data.message)
                    window.open("/register", "_self")
                }
                else if (response.data.status === "success") {
                    window.alert("Verified and Registered");
                    window.open("/login", "_self")
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
                    <h1 className="form-heading">Verify OTP</h1>
                    <input
                        className='form-feilds' placeholder='name' name="name" required="true">
                    </input>
                    <input
                        className='form-feilds' placeholder='EMAIL' type="email" name="EMAIL" required="true">
                    </input>
                    <input
                        className='form-feilds' placeholder='OTP' type="number" name="OTP" required="true">
                    </input>
                    <button className="form-submit">Verify</button>
                </form>
            </div>
        </div>
    )
}