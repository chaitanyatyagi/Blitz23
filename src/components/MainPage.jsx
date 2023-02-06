import "../style/mainpage.css"
import { useRef } from "react"
import React from "react"
import SponsorFlash from "./SponsorFlash";

function MainPage() {
    // const scrollToRef = useRef()
    const landingPg1 = useRef();
    const landingPg2 = useRef();
    const landingPg3 = useRef();
    const landingPg4 = useRef();


    return (
        <div className="mainpage">
            <SponsorFlash />
            <section className="landingPg1" data-aos='fade-up-right' ref={landingPg1}>
                <div className="landingPg1ins">
                </div>
            </section>
            <section className="landingPg2" data-aos='fade-up-right' ref={landingPg2}>
                <div className="landingPg2left">
                    <div className="landingPg2lefthead" data-aos='ease-in-out-back'>ABOUT US</div>
                    <div className="landingPg2leftcontent">Blitzschlag is the Annual Cultural Festival of MNIT Jaipur, promoting the Avant-Garde of our Nation.
                        A four-day fête, aiming towards absolute euphoria providing budding artists with a diverse competing platform for music, dance, drama, and a lot more. Situated in the pink city of folklore and traditions, Blitzschlag is an escapade, from the mundane life, to embrace the enchantment around. The Professionals would also be performing to bewitch the crowd and address the importance of living every breath.
                        Bringing forth a gateway to a myriad of legacies, interests, and talents, that won’t go unappreciated.</div>
                </div>
                <div className="landingPg2right"></div>
            </section>
            <section className="landingPg3" data-aos='fade-up-right' ref={landingPg3}>
                <div className="landingPg3Head">THEME : ILLUSION</div>
                <div className="landingPg3main">
                    <div className="landingPg3left">
                        <div className="landingPg3content">Imagine losing the sense of "reality" for a minute or two?
                            Imagine your brain pulling pranks over you?
                            These weirdly bewildering thoughts are being brought to life this year at BLITSCHLAG 2023
                            With our theme ILISOLUN.
                            ILLUSION, a misrepresentation of a “real”;
                            an interpretation that contradicts objective “reality” as defined by general agreement.
                            Why does our brain play around with our ability to see and think though?
                            Or are we just delusional?
                            A curious and greedy brain is what we feed upon;
                            Hence all answers to your curious mind
                            Would be here... waiting for you to be discovered,seen,understood and solved...
                            So this this year, lets put into test and see;
                            "TEH PAOMNNEHAL PWEOR OF THE HMUAN MNID"! ***Come witness the illusions of life and get lost in the meandering curves to fall and rise in the land of unending illusions...
                        </div>
                    </div>
                    <div className="landingPg3right"></div>
                </div>
            </section>
            <section className="landingPg4" data-aos='flip-left' ref={landingPg4}>
                <div className="landingPg4left"></div>
                <div className="landingPg4right"></div>
            </section>
        </div>
    )
}

export default MainPage