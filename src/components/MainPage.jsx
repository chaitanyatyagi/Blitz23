// import "../style/mainpage.css"
// import Navbar from "./Navbar"
// import { useRef, useState } from "react"
// import React from "react"


// function MainPage() {
//     // const scrollToRef = useRef()
//     const landingPg1 = useRef();
//     const landingPg2 = useRef();
//     const landingPg3 = useRef();
//     const landingPg4 = useRef();


//     return (
//         <div className="mainpage">
//             {/* <Navbar /> */}
//             <section className="landingPg1" ref={landingPg1}>
//                 <div className="landingPg1ins"></div>
//             </section>
//             <section className="landingPg2" data-aos='fade-up-right' ref={landingPg2}>
//                 <div className="landingPg2left">
//                     <div className="landingPg2lefthead" data-aos='ease-in-out-back'>ABOUT US</div>
//                     <div className="landingPg2leftcontent">Malaviya National Institute of Technology is a Gibraltar of technological learning, imparting word class education to thousands of students every year, nurturing their skills to produce future leaders, and creating an environment wherein the joy for learning may thrive. Blitzschlag, MNIT's annual cultural mega-event, with a glorious history spanning 15 years, is synonymous with a wholesome cultural carnival throughout Rajasthan, due to its unparalleled grandeur. Every year, Blitzschlag invites innumerable students from all over India, presenting an unmissable opportunity to savour all the cultural enjoyment that 3 days can accommodate. With a plethora of cultural events and competitions, Blitzschlag 2020 escalates the euphoria of the participants to its pinnacle. Topping the benchmark set by the precedent year, Blitzschlag revamps itself each year, perpetually raising the standards of the event. With a footfall of over 25000, Blitzschlag attracts talents including prominent national speakers, awe-inspiring artists, and artistic members of the youth, who elevate the cultural enthusiasm. Hence Blitzschlag is known as a cultural bonanza, spreading its wings across life, work, passion.</div>
//                 </div>
//                 <div className="landingPg2right"></div>
//             </section>
//             <section className="landingPg3" data-aos='fade-up-right' ref={landingPg3}>
//                 <div className="landingPg3Head">THEME : ILLUSION</div>
//                 <div className="landingPg3main">
//                     <div className="landingPg3left">
//                         <div className="landingPg3content">Blitzschlag is the Annual Cultural Festival of MNIT Jaipur, promoting the Avant-Garde of our Nation.
//                             A four-day fête, aiming towards absolute euphoria providing budding artists with a diverse competing platform for music, dance, drama, and a lot more. Situated in the pink city of folklore and traditions, Blitzschlag is an escapade, from the mundane life, to embrace the enchantment around. The Professionals would also be performing to bewitch the crowd and address the importance of living every breath.
//                             Bringing forth a gateway to a myriad of legacies, interests, and talents, that won’t go unappreciated.
//                         </div>
//                         <div className="landingPg3b1">20K+ FOOTFALL</div>
//                         <div className="landingPg3b2">62+ EVENTS</div>
//                         <div className="landingPg3b3">25+ COLLEGES</div>
//                     </div>
//                     <div className="landingPg3right"></div>
//                 </div>
//             </section>
//             <section className="landingPg4" data-aos='flip-left' ref={landingPg4}>
//                 <div className="landingPg4left"></div>
//                 <div className="landingPg4right"></div>
//             </section>
//         </div>
//     )
// }

// export default MainPage






import "../style/mainpage.css"
import { useRef } from "react"
import React from "react"
import { Link } from "react-router-dom"

function MainPage() {
    // const scrollToRef = useRef()
    const landingPg1 = useRef();
    const landingPg2 = useRef();
    const landingPg3 = useRef();
    const landingPg4 = useRef();


    return (
        <div className="mainpage">
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
                            "TEH PAOMNNEHAL PWEOR OF THE HMUAN MNID"





                            ***Come witness the illusions of life and get lost in the meandering curves to fall and rise in the land of unending illusions...
                        </div>
                        {/* <div className="landingPg3footer">
                            <div className="landingPg3b1">20K+ FOOTFALL</div>
                            <div className="landingPg3b2">62+ EVENTS</div>
                            <div className="landingPg3b3">25+ COLLEGES</div>
                        </div> */}

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