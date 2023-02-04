import React from "react"
import "../style/sponsor.css"
import sponsor from "../TestData/realSponsor"

function Sponsor() {
    return (
        <div className="sponsor">
            {/* <Navbar /> */}
            <div className="sponsormainleft">
                <div className="sponsorhead">SPONSORS</div>
                <div className="sponsorcontent">Over the past years, Blitzschlag has had the privilege of hosting a number of sponsors which have provided a very entertaining experience to our visitors as well as the brands.
                    The crowd engagement, media exposure, sampling, and brand building opportunities offered at Blitzschlag are unparalleled. Your contribution has allowed us to bring together the best of talent and creativity, creating an environment for our visitors to learn, grow and be entertained.
                    We would like to take this opportunity to thank you for your unwavering support and for being a part of this cultural extravaganza. Your support has played a vital role in making Blitzschlag the largest cultural festival of Rajasthan.
                    Cultural Society would like to thank its collaborators for their continued support and partnership. We look forward to working with you again in the future.</div>
            </div>
            <div className="sponsormainright">
                {
                    sponsor.map((el) => (
                        <div className="sponsorrightins">
                            <div className="sponsormainins" style={{ backgroundImage: `url(/${el.image})` }}></div>
                            <div className="sponsormaininsname">{el.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sponsor