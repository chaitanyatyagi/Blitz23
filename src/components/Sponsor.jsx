import React from "react"
import "../style/sponsor.css"
import sponsor from "../TestData/sponsorData"

function Sponsor() {
    console.log(sponsor[0].image)
    return (
        <div className="sponsor">
            {/* <Navbar /> */}
            <div className="sponsorhead">SPONSORS</div>
            <div className="sponsorcontent">Over the past years BLITZSCHLAG has had the privilege to have hosted a number of sponsors which provided a very entertaining experience to our visitors as well as the brand. The crowd engagement, media exposure, sampling and brand building opportunities offered at BLITZSCHLAG are unparalleled.</div>
            <div className="sponsormain">
                {
                    sponsor.map((el) => (
                        <div className="sponsormainins" style={{ backgroundImage: `url(${el.image})` }}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sponsor