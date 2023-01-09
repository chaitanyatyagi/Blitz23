import React from "react";
import { Navbar } from "react-bootstrap";
import "../style/Accomodation.css";
import leftControl from "../images/Vector-left.png";
import rightControl from "../images/Vector-right.png";
import packages from "../TestData/accomodationData";
import { Link } from "react-router-dom";
import ruleLogo from "../images/rule_FILL0_wght400_GRAD0_opsz48.png";
import closeLogo from "../images/close_FILL0_wght400_GRAD0_opsz48.png";

export default function Accomodation() {
	let formTemplate = {
		name: "",
		college: "",
		blitzID: "",
		email: "",
		phone: "",
		teamName: "",
		Nmembers: "",
		flagship: "",
		date: "",
	};
	function handleRules() {
		setRulesActive((prev) => !prev);
	}
	const [formActive, setFormActive] = React.useState(false);
	const [activePackage, setActivePackage] = React.useState(0);
	const [formData, setFormData] = React.useState(formTemplate);
	const [rulesActive, setRulesActive] = React.useState(false);
	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	function RulesFloat() {
		return (
			<div
				className="accomaodation-rules-float-cont"
				onClick={() => {
					handleRules();
				}}
			>
				<img
					src={rulesActive ? closeLogo : ruleLogo}
					classNames="accomodation-rules-icon"
				></img>
			</div>
		);
	}
	function displayForm() {
		setFormActive(true);
	}
	function handleSubmit() {
		console.log(formData);
		setFormData(formTemplate);
		setFormActive(false);
	}
	function handleClose() {
		setFormData(formTemplate);
		setFormActive(false);
	}

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
				<button
					className="accomodation-cards-pay"
					onClick={(e) => {
						displayForm();
					}}
				>
					Pay Now
				</button>
			</div>
		);
	});
	return (
		<div className="accomodation-root">
			<Navbar />
			<RulesFloat />
			<div className="accomodation-container">
				<div className="accomodation-details-page">
					<div className="accomodation-head">Hospitality</div>
					<div className="accomodation-body">
						Over the past years BLITZSCHLAG has had the privilege to have hosted a
						number of sponsors which provided a very entertaining experience to our
						visitors as well as the brand. The crowd engagement, media exposure,
						sampling and brand building opportunities offered at BLITZSCHLAG are
						unparalleled.
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
				{formActive && (
					<div className="accomodation-form-popup">
						<div className="accomodation-form-header">{`Registration - Accomodation`}</div>
						<div className="row-wrapper">
							<input
								className="accomodation-form-text-input"
								placeholder="Name of Participant"
								name="name"
								value={formData.name}
								onChange={handleChange}
							/>
							<input
								className=" accomodation-form-text-input"
								placeholder="Name of institute"
								name="college"
								value={formData.college}
								onChange={handleChange}
							/>
						</div>
						<div className="row-wrapper">
							<input
								className=" accomodation-form-text-input"
								placeholder="BlitzID"
								name="blitzID"
								value={formData.blitzID}
								onChange={handleChange}
							/>
							<input
								className=" accomodation-form-text-input"
								placeholder="Email"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="row-wrapper">
							<input
								className=" accomodation-form-text-input"
								placeholder="Phone Number"
								name="phone"
								type="tel"
								value={formData.phone}
								onChange={handleChange}
							/>
							<input
								className=" accomodation-form-text-input"
								placeholder="Name of Team"
								name="teamName"
								value={formData.teamName}
								onChange={handleChange}
							/>
						</div>
						<div className="row-wrapper">
							<div className="accomodation-form-selectors">
								<label htmlFor="date" className="accomodation-form-labels">
									Date
								</label>
								<select
									className="accomodation-selector-menu"
									name="date"
									value={formData.date}
									onChange={handleChange}
								>
									<option value={"2 Feb"}>2 Feb</option>
									<option value={"3 Feb"}>3 Feb</option>
									<option value={"4 Feb"}>4 Feb</option>
									<option value={"5 Feb"}>5 Feb</option>
								</select>
							</div>
							<div className="accomodation-form-selectors">
								<label htmlFor="flagship" className="accomodation-form-labels">
									Flagship Event
								</label>
								<select
									className="accomodation-selector-menu"
									name="flagship"
									value={formData.flagship}
									onChange={handleChange}
								>
									<option value={"Ramba Samba"}>Ramba Samba</option>
									<option value={"Panache"}>Panache</option>
									<option value={"Battle of Bands"}>Battle of Bands</option>
									<option value={"Blitz Got Talent"}>Blitz Got Talent</option>
								</select>
							</div>
						</div>
						<div className="row-wrapper">
							<div className="price-row-manager">
								<input
									className=" accomodation-form-number-input"
									placeholder="No. of Memebers"
									name="Nmembers"
									type="number"
									value={formData.Nmembers}
									onChange={handleChange}
								/>
							</div>
							<div className="accomodation-form-labels price-display">
								Price : {packages[activePackage].price * formData.Nmembers}
							</div>
						</div>
						<div className="row-wrapper button-row">
							<Link
								className="event-link-remover event-card-register-link"
								onClick={handleSubmit}
							>
								SUBMIT
							</Link>
							<Link
								className="event-link-remover event-card-register-link"
								onClick={handleClose}
							>
								CLOSE
							</Link>
						</div>
					</div>
				)}
				{rulesActive && (
					<div className="accomodation-rules-container">
						<div className="accomodation-rules-head">Rules and regulations:</div>
						All the students need to carry their institute ID cards, and Visitor Booklet
						at all times. <br></br>
						You will be asked to leave the campus if the mentioned items are not
						possessed. <br></br>
						No one will be allowed to enter the campus between 11:00 PM to 6:00 AM in
						any case. (Time Variable) <br></br>
						Students are required to report at the Registration Desk upon arrival in
						MNIT Jaipur.<br></br> Valuable items like cameras, cell phones, laptops, etc
						are to be carried at your own risk.<br></br> BLITZSCHLAG Team will not be
						responsible if any belongings of any participants go missing from the hostel
						room. Police will be informed and team BLITZSCHLAG won't participate in
						further proceedings. <br></br>Consumption of Cigarettes, alcohol, other
						intoxicants, or banned substances is strictly prohibited on campus.<br></br>
						Entry to campus under the influence of Intoxicants is prohibited. Violators
						will be reported to the police and will be immediately asked to leave the
						campus. <br></br>Visitors caught in other places on the campus will face
						strict actions and immediate disqualification. <br></br>Motorized vehicles
						are strictly prohibited on campus. <br></br>Boys are not allowed inside
						Girl's hostels and vice-versa. Any kind of nuisance or unruly behavior won't
						be tolerated. <br></br>Violation of the rules and regulations of MNIT JAIPUR
						would be immediately debarred from the campus. Police action would be taken
						in extreme cases. <br></br>MNIT JAIPUR is not responsible in case of any
						mishap, accident, or any other injury during your stay on campus. No damage
						to the institute property will be tolerated.<br></br> Any damage to the
						hostel or institute property is the responsibility of the visitor.<br></br>
						Visitors must stay indoors after 1:00 AM. <br></br>No loud noise is allowed
						on the campus after 10:00 PM. Sound to be within the permissible limit
						before 10:00 PM. <br></br>At the time of check-out the participants are
						required to return all the commodities provided to them by the organizers.
						Heavy penalties will be imposed by the organizing team in case anything goes
						missing. The incident would be reported to the respective college Dean.
						<br></br> The decision of the BLITZSCHLAG Team and MNIT JAIPUR authorities
						shall be final and binding in case of any disputes.<br></br>
					</div>
				)}
			</div>
		</div>
	);
}
