import React from "react"
import "../style/payment.css"
import axios from "axios"

export default function Payment(props) {

    const [utr, setUtr] = React.useState("")
    const [transaction, setTransaction] = React.useState("")

    function payment(e) {
        console.log(utr)
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER}/events/registration`, { eventName: props.eventName, userId: props.userId, utrId: utr, transaction: transaction })
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
                props.qrcode ? <div className="qrcode" style={{ backgroundImage: `url("/qrcode/flagship.jpeg")` }}></div> : <div className="qrcode">{props.data}</div>
            }
            <div className="utr">
                <div className="utrtext">UTR ID :</div>
                <input type="text" className="utrinput" value={utr} onChange={(e) => setUtr(e.target.value)} />
            </div>
            <div className="utr">
                <div className="utrtext">TRANSACTION ID :</div>
                <input type="text" className="utrinput" value={transaction} onChange={(e) => setTransaction(e.target.value)} />
            </div>
            <div className="paymentsubmit" onClick={(e) => payment(e)}>Submit</div>
            <div className="paymentsubmit" onClick={() => close()}>Close</div>
            <div className="paymentinstructions">
                <div className="paymentintructionshead">Instructions</div>
                <ul className="paymentinstructionstext">
                    <li className="payinspoint">After payment submit your utr id for sure.</li>
                    <li className="payinspoint">Verification of payment will be done on the basis of utr id.</li>
                    <li className="payinspoint">after payment enter your utr id, nd then click on submit button</li>
                    <li className="payinspoint">you can find utr id below transaction id</li>
                </ul>
            </div>
        </div>
    )
}