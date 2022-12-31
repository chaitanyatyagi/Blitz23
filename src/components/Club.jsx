import React from "react";
import Navbar from "./Navbar";
import ClubBar from "./ClubBar";
import clubData from "../TestData/clubData";
import DanceCover from "../images/danceclubcover.png";
import { Link } from "react-router-dom";
import "../style/Club.css";

export default function Club() {
	const [clubIndex, setClubIndex] = React.useState(0);
	return (
		<div className="club-background">
			{/* <Navbar /> */}
			<div className="club-contanier">
				<div className="club-side-bar"></div>
				<div className="club-info">
					<div className="club-info-card">
						<div className="club-info-image-container">
							<img alt="4" src={DanceCover} className="club-info-image" />
						</div>
						<div className="club-info-text">
							<div className="club-info-title">{clubData[clubIndex].title}</div>
							<div className="club-info-body">{clubData[clubIndex].description}</div>
							<Link className="club-remove-decor">
								<div className="club-info-link">See More</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<ClubBar active={clubIndex} onChange={setClubIndex} />
		</div>
	);
}
