import "../style/profile.css";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import React from "react";
import userInfo from "../TestData/userData";
import eventInfo from "../TestData/eventData";

export default function Profile() {
    const eventData = eventInfo.map((x) => {
        return (
            <EventCard name={x.name} teamName={x.teamName} nMembers={x.nMembers} link={x.link} />
        );
    });

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