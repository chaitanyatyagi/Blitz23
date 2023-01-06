import "../style/profile.css";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import React from "react";
// import userInfo from "../TestData/userData";
// import eventInfo from "../TestData/eventData";
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Profile({ userInfo, isLoggedIn }) {
    const navigate = useNavigate()
    var eventData = <></>
    if (userInfo.events) {
        eventData = userInfo.events.map(x => {
            return <EventCard
                name={x.eventName}
                teamName={x.teamName}
                nMembers={x.members}
            // link={x.link}
            />
        })
    }
    if (!isLoggedIn || !userInfo) {
        return <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1>Please Login</h1>
        </div>
    }
    else
        return (
            <div className="profile-body">
                <div className="profile-container">
                    <div className="profile-head-div">
                        <h1 className="profile-heading">&lt; User Profile &gt;</h1>
                    </div>
                    <div className="profile-content">
                        <div className="profile-user-side">
                            <div className="profile-user-profile">
                                <div className="profile-user-img"></div>
                                <div className="profile-user-details">
                                    <div className="profile-user-name">{userInfo.fullName}</div>
                                    <div className="profile-user-contact">
                                        <div className="profile-details-holder">
                                            <div className="profile-user-icons-username"></div>
                                            <h3 className="profile-user-contact-details">
                                                {" "}
                                                : {userInfo.username}
                                            </h3>
                                        </div>
                                        <div className="profile-details-holder">
                                            <div className="profile-user-icons-email"></div>
                                            <h3 className="profile-user-contact-details">
                                                {" "}
                                                : {userInfo.email}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-blitz-logo"></div>
                        </div>
                        <div className="profile-separator"></div>
                        <div className="profile-event-side">
                            <h1 className="profile-event-head">Registered Events</h1>
                            <div className="profile-event-list">{eventData}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
}