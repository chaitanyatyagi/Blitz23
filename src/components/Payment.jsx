import React from "react"
import "../style/payment.css"
import axios from "axios"

export default function Payment(props) {

    const [utr, setUtr] = React.useState("")

    function payment(e) {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER}/events/registration`, { eventName: props.eventName, userId: props.userId, utrId: utr, teamName: props.teamName, members: props.members, phone: props.phone, teamLeader: props.teamLeader, register: props.register, day: props.day, packageName: props.packageName, InstituteId: props.InstituteId })
            .then(function (response) {
                if (response.data.status === "error")
                    window.alert(response.data.message)
                else {
                    window.alert("registration successfull");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        props.setDispPayment(false)
    }
    function close() {
        props.setDispPayment(false)
    }
    return (
        <div className="payment">
            {
                props.qrcode ? <div className="qrcode" style={{ backgroundImage: `url(${props.path})` }}></div> : <div className="qrcode">{props.data}</div>
            }
            <div className="utrtext">UPI TRANSACTION ID (UTR ID)</div>
            <input type="text" value={utr} onChange={(e) => setUtr(e.target.value)} />

            <div className="paymentsubmit" onClick={(e) => payment(e)}>Submit</div>
            <div className="paymentsubmit" onClick={() => close()}>Close</div>
            <div className="paymentinstructions">
                <div className="paymentintructionshead">Instructions</div>
                <ul className="paymentinstructionstext">
                    <li className="payinspoint">Note: Payment will be done by either PhonePay or Google Pay.</li>
                    <li className="payinspoint">After the Transaction, UTR ID will be generated and can be seen in your Transaction History. Enter your UTR ID Carefully as the Transaction will only be verified through this UTR ID. No Replicates of UTR ID will be Entertained. The Entry will be Discarded Automatically.</li>
                </ul>
                <div className="plst">
                    <h3>Where to get UTR / UPI Transaction ID ?</h3>
                    <h5>Following two images are provided for your reference where you can get UTR ID of the transaction</h5>
                    <img src="/qrcode/ref1.jpeg" alt="reference 1" width="300" height="400" />
                    <img src="/qrcode/ref2.jpeg" alt="reference 1" width="300" height="400" />
                </div>
            </div>
        </div>
    )
}