import "../style/profile.css";
import EventCard from "./EventCard";
import React from "react";
// import userInfo from "../TestData/userData";
// import eventInfo from "../TestData/eventData";
import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

export default function Profile({ userInfo,isLoggedIn }) {
    const navigate=useNavigate()
    var eventData=<></>
    if(userInfo.events){
        eventData = userInfo.events.map(x => {
        return <EventCard
            name={x.eventName}
            teamName={x.teamName}
            nMembers={x.members}
            // link={x.link}
        />
    })
        }
    if(!isLoggedIn || ! userInfo)
    {
        return <div style={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <h1>Please Login</h1>
        </div>
        }
    else
    return (
        <div className="body">
            <div className="containerprof">
                <div className="head-div">
                    <h1 className="heading">&lt; User Profile &gt;</h1>
                </div>
                <div className="contentprof">
                    <div className="user-side">
                        <div className="user-profile">
                            <div className="user-details">
                                <div className="user-name">{userInfo.name}</div>
                                <div className="user-contact">
                                    <div className="details-holder">
                                        <div className="user-icons-username"></div>
                                        <h3 className="user-contact-details"> : {userInfo.password}</h3>
                                    </div>
                                    <div className="details-holder">
                                        <div className="user-icons-email"></div>
                                        <h3 className="user-contact-details"> : {userInfo.email}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blitz-logo"></div>
                    </div>
                    <div className="separator"></div>
                    <div className="event-side">
                        <h1 className="event-head">Registered Events</h1>
                        <div className="event-list">
                            {eventData}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}