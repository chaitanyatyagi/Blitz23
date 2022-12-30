import "../style/profile.css";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import React from "react";
import userInfo from "../userData";
import eventInfo from "../eventData";

export default function Profile() {
    const eventData = eventInfo.map(x => {
        return <EventCard
            name={x.name}
            teamName={x.teamName}
            nMembers={x.nMembers}
            link={x.link}
        />
    })

    return (
        <div className="body">
            <Navbar />
            <div className="containerprof">
                <div className="head-div">
                    <h1 className="heading">&lt; User Profile &gt;</h1>
                </div>
                <div className="contentprof">
                    <div className="user-side">
                        <div className="user-profile">
                            <div className="user-img"></div>
                            <div className="user-details">
                                <div className="user-name">{userInfo.fullName}</div>
                                <div className="user-contact">
                                    <div className="details-holder">
                                        <div className="user-icons-username"></div>
                                        <h3 className="user-contact-details"> : {userInfo.username}</h3>
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