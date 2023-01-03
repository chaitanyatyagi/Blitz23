import React, {useState} from 'react'
import '../style/hospitality.css'
function Hospitaliy() {
    const [back, setBack]=useState(false)
    // const [next, setNext]=useState()
    return (
        <div className='containerhos'>
            <div className={back?"moveback":"movenext"}>
                <div className='cardhospitality'>
                    <div className='cardhead'>
                        Hospitality
                    </div>
                    <div className='cardcontent'>
                        Detail Detail Detail Detail Detail Details Detail the past years BLITZSCHLAG has had the privilege to have hosted a number visitors as well as the brand. Detail Detail Detail Detail Detail Detail.

                        <div className='price'>Price : 500.00 Rs</div>
                    </div>
                    <div className='paybtn'>
                        Pay Now
                    </div>
                </div>
                <div className='cardhospitality'>
                    <div className='cardhead'>
                        Hospitality2
                    </div>
                    <div className='cardcontent'>
                        Detail Detail Detail Detail Detail Details Detail the past years BLITZSCHLAG has had the privilege to have hosted a number visitors as well as the brand. Detail Detail Detail Detail Detail Detail.

                        <div className='price'>Price : 500.00 Rs</div>
                    </div>
                    <div className='paybtn'>
                        Pay Now
                    </div>
                </div>
                <div className='cardhospitality'>
                    <div className='cardhead'>
                        Hospitality3
                    </div>
                    <div className='cardcontent'>
                        Detail Detail Detail Detail Detail Details Detail the past years BLITZSCHLAG has had the privilege to have hosted a number visitors as well as the brand. Detail Detail Detail Detail Detail Detail.

                        <div className='price'>Price : 500.00 Rs</div>
                    </div>
                    <div className='paybtn'>
                        Pay Now
                    </div>
                </div>
                <div className='cardhospitality'>
                    <div className='cardhead'>
                        Hospitality4
                    </div>
                    <div className='cardcontent'>
                        Detail Detail Detail Detail Detail Details Detail the past years BLITZSCHLAG has had the privilege to have hosted a number visitors as well as the brand. Detail Detail Detail Detail Detail Detail.

                        <div className='price'>Price : 500.00 Rs</div>
                    </div>
                    <div className='paybtn'>
                        Pay Now
                    </div>
                </div>
                
            </div>
            <div className='scrollbtn'>
                    <div className='btnhos' onClick={()=>setBack(true)}>
                        Back
                    </div>
                    <div className='btnhos' onClick={()=>setBack(false)}>
                        Next
                    </div>
                </div>
        </div>

    )
}

export default Hospitaliy
