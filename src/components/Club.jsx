import React from "react";
import Navbar from "./Navbar";
import ClubBar from "./ClubBar";
import clubData from "../TestData/clubData";
import DanceCover from "../images/danceclubcover.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Club.css";

export default function Club(props) {
	return (
		<div className="club-background">
			<div className="club-contanier">
				<div className="club-side-bar"></div>
				<div className="club-info">
					<div className="club-info-card">
						<div className="club-info-image-container">
							<LazyLoadImage
								src={
									typeof clubData[props.active].image !== "undefined"
										? `/Clubs/${clubData[props.active].image}`
										: DanceCover
								}
								className="club-info-image"
							/>
						</div>
						<div className="club-info-text">
							<div className="club-info-title">{clubData[props.active].title}</div>
							<div className="club-info-body">
								{clubData[props.active].description}
							</div>
							<Link className="club-remove-decor" to="/club-blitz-events">
								<div className="club-info-link">Events</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<ClubBar active={props.active} onChange={props.change} />
		</div>
	);
}
