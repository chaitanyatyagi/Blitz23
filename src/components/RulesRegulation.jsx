import React from "react"
import "../style/rules.css"
import sponsorData from "../TestData/sponsorData"
import axios from "axios"
import fileDownload from "js-file-download"

function RulesRegulation() {

    function download(e, eventname) {
        console.log(eventname)
        e.preventDefault()
        axios({
            url: `http://127.0.0.1:2080/rulebook/pdf/${eventname}`,
            method: "GET",
            responseType: "blob"
        }).then((response) => {
            fileDownload(response.data, `${eventname}.pdf`)
        }).catch((err) => console.log(err))
    }

    return (
        <div className="rules-regulations">
            <div className="leftrules"></div>
            <div className="rightrules">
                {
                    sponsorData.map((element) => (
                        <div className="rulesInside">
                            <div className="rulesinshead">{element.clubEvents}</div>
                            {
                                element.events.map((indx) => (
                                    <div className="rulesinsname">
                                        <div className="rulesinsinsname">{indx}</div>
                                        <div className="rulesinsinsbtn" onClick={(e) => download(e, indx.split(" ").join("").toLowerCase())}>Rulebook</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default RulesRegulation