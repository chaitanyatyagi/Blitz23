import "../style/login.css";
import Navbar from "./Navbar";
import React from "react";
import blitz from "../images/IMG-8305.PNG";
import close from "../images/Vector.png";
import formCorner from "../images/image76.png";

export default function Registration(){
    const [formData,setFormData]=React.useState({
        fullName:"",
        emailId:"",
        teamName:"",
    })
    
    function handleChange(e){
        setFormData(prev=>{return{
            ...prev,
            [e.target.name]:e.target.value
        }})
    }
    function handleSubmit(e){
        console.log("clicked")
        console.log(formData)
        setFormData({
            emailId:"",
            password:"",
        })
    }
    function handleClose(){
        console.log("close");
    }

    return (
        <div className="body">
            <Navbar/>
            <div className="container">
                <div className="image">
                    <image src={blitz}/>
                    <button className="form-close" onClick={()=>{handleClose()}}><image className="close-img" src={close} alt="Close"></image></button>
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
                    onChange={(e)=>handleChange(e)}>
                    </input>
                    <input 
                    name="password"
                    className="form-feilds" 
                    placeholder="Password"
                    value={formData.password}
                    type="password"
                    onChange={(e)=>handleChange(e)}>
                    </input>
                    <a href="#" className="forgot-pass">Forgot Password?</a>
                    </div>
                    <button className="form-submit" onClick={(e)=>handleSubmit(e)}>Login</button>
                    <div className="seprator"></div>
                    <div className="login-options">
                        <h6 className="options-head">or login with</h6>
                        <div className="icons">
                            <div className="icon facebook" onClick={()=>{console.log("facebook")}}></div>
                            <div className="icon google" onClick={()=>{console.log("google")}}></div>
                            <div className="icon twitter" onClick={()=>{console.log("twitter")}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}