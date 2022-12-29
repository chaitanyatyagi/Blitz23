import "../style/registration.css";
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
            fullName:"",
            emailId:"",
            teamName:"",
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
                </div>
                <div className="form">
                    <button className="form-close" onClick={()=>{handleClose()}}><image className="close-img" src={close} alt="Close"></image></button>
                    <image src={formCorner} className="top-right"></image>
                    <image src={formCorner} className="bottom-left"></image>
                    <h1 className="form-heading">Registration</h1>
                    <input 
                    name="fullName"
                    className="form-feilds" 
                    placeholder="Full Name"
                    value={formData.fullName}
                    type="text"
                    onChange={(e)=>handleChange(e)}>
                    </input>
                    <input 
                    name="emailId"
                    className="form-feilds" 
                    placeholder="Email-ID"
                    value={formData.emailId}
                    type="email"
                    onChange={(e)=>handleChange(e)}>
                    </input>
                    <input
                    name="teamName"
                    className="form-feilds" 
                    placeholder="Team Name"
                    value={formData.teamName}
                    type="text"
                    onChange={(e)=>handleChange(e)}>
                    </input>
                    <button className="form-submit" onClick={(e)=>handleSubmit(e)}>Register</button>
                </div>
            </div>
        </div>
    )
}