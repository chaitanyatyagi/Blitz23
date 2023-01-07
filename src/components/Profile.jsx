import "../style/profile.css";
import EventCard from "./EventCard";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

export default function Profile({ userInfo, isLoggedIn }) {

    // useEffect(() => {
    //     axios.post(`${process.env.REACT_APP_SERVER}/events/registration-check`, { events: userInfo.events, blitzId: userInfo.blitzId })
    // }).then((response) => {

    // }).catch((error) => {
    //     console.log(error)
    // })

    const navigate = useNavigate()
    var eventData = <></>
    if (userInfo.events) {
        eventData = userInfo.events.map(x => {
            return <EventCard
                name={x.eventName}
                teamName={x.teamName}
                nMembers={x.members}
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
                                <div className="profile-user-details">
                                    <div className="profile-user-name">{userInfo.name}</div>
                                    <div className="profile-user-contact">
                                        <div className="profile-details-holder">
                                            <div className="profile-user-icons-username"></div>
                                            <h3 className="profile-user-contact-details">
                                                {" "}
                                                Blitzschlag ID - {userInfo.blitzId}
                                            </h3>
                                        </div>
                                        <div className="profile-details-holder">
                                            <div className="profile-user-icons-email"></div>
                                            <h3 className="profile-user-contact-details">
                                                {" "}
                                                {userInfo.email}
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