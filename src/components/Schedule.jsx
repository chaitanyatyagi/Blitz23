import React from "react";
import "../style/schedule.css"
import scheduleData from "../TestData/schedule"
import { useState } from "react";

function Schedule() {

    const [cnt, setCnt] = useState(0)
    const array = ["Event", "Time", "Venue"]

    return (
        <div className="schedule">
            <div className="schedule-head">EVENTS-SCHEDULE</div>
            <div className="scheduledaytabs">
                <div className={cnt === 0 ? "eachdaytabnew" : "eachdaytab"} onClick={() => setCnt(0)}>Day 0 (9th Feb)</div>
                <div className={cnt === 1 ? "eachdaytabnew" : "eachdaytab"} onClick={() => setCnt(1)}>Day 1 (10th Feb)</div>
                <div className={cnt === 2 ? "eachdaytabnew" : "eachdaytab"} onClick={() => setCnt(2)}>Day 2 (11th Feb)</div>
                <div className={cnt === 3 ? "eachdaytabnew" : "eachdaytab"} onClick={() => setCnt(3)}>Day 3 (12th Feb)</div>
            </div>
            <div className="scheduleseparateline"></div>
            <div className="schedulemaincontent">
                <div className="scheduleevent">
                    <div className="schedule-ins-head">Event</div>
                    <div className="schedule-ins-content">
                        {
                            scheduleData[cnt].map((data) => (
                                <div className="schedule-data">
                                    {data["Event"]}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="scheduleevent">
                    <div className="schedule-ins-head">Time</div>
                    <div className="schedule-ins-content">
                        {
                            scheduleData[cnt].map((data) => (
                                <div className="schedule-data">
                                    {data["Time"]}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="scheduleevent">
                    <div className="schedule-ins-head">Venue</div>
                    <div className="schedule-ins-content">
                        {
                            scheduleData[cnt].map((data) => (
                                <div className="schedule-data">
                                    {data["Venue"]}
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Schedule