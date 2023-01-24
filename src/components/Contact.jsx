import React from "react";
import "../style/contact.css";
import Contactdetails from "./ContactApi";
import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

export default function Contact() {
	return (
		<>
			<div className="maincontainer">
				<div className="contheading">contact us</div>
				<div className="contnav">
					{Contactdetails.map((item) => {
						return (
							<div key={item.id}>
								{" "}
								<a href={"#" + item.id + "id"}>{item.title}</a>
							</div>
						);
					})}
				</div>
				<div className="contdetails">
					{Contactdetails.map((item) => {
						return (
							<div className="subheading" id={item.id + "id"} key={item.id}>
								{item.title}
								<div className="cardContainer">
									{item.team.map((member) => {
										return (
											<div className="teamMemb">
												<img src={`${member.memimg}`} className="contimg" />
												<div>
													<p className="memname">{member.name}</p>
													<p className="post">{member.position}</p>
													<p className="emailc">{member.email}</p>
													<p className="phone">{member.phone}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
