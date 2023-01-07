import React from "react";
import { Navbar } from "react-bootstrap";
import "../style/Accomodation.css";
import leftControl from "../images/Vector-left.png";
import rightControl from "../images/Vector-right.png";
import packages from "../TestData/accomodationData";
export default function Accomodation() {
	const [activePackage, setActivePackage] = React.useState(0);
	let prevPackage = activePackage === 0 ? packages.length - 1 : activePackage - 1;
	let nextPackage = activePackage === packages.length - 1 ? 0 : activePackage + 1;
	let dispCards = packages.map((x, i) => {
		let Class =
			i === prevPackage
				? "accomodation-cards-left"
				: i === activePackage
				? "accomodation-cards-active"
				: i === nextPackage
				? "accomodation-cards-right"
				: "accomodation-cards-noDisp";
		return (
			<div className={Class}>
				<div className="accomodation-cards-hero">
					<div className="accomodation-cards-hero-header">{x.head}</div>
					<div className="accomodation-cards-hero-content">{x.detail}</div>
					<div className="accomodation-cards-hero-price">Price : {x.price}</div>
				</div>
				<button className="accomodation-cards-pay">Pay Now</button>
			</div>
		);
	});
	return (
		<div className="accomodation-root">
			<Navbar />
			<div className="accomodation-container">
				<div className="accomodation-head">Hospitality</div>
				<div className="accomodation-body">
					Over the past years BLITZSCHLAG has had the privilege to have hosted a number of
					sponsors which provided a very entertaining experience to our visitors as well
					as the brand. The crowd engagement, media exposure, sampling and brand building
					opportunities offered at BLITZSCHLAG are unparalleled.
				</div>
				<div className="accomodation-carousel">
					<div className="accomodation-carousel-cards">{dispCards}</div>
					<div className="accomodation-carousel-control">
						<button
							className="accomodation-carousel-control-button"
							onClick={() => {
								setActivePackage((prev) => {
									return prev === 0 ? packages.length - 1 : prev - 1;
								});
							}}
						>
							<img src={leftControl} />
						</button>
						<button
							className="accomodation-carousel-control-button"
							onClick={() => {
								setActivePackage((prev) => {
									return prev === packages.length - 1 ? 0 : prev + 1;
								});
							}}
						>
							<img src={rightControl} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
