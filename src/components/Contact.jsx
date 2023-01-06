import React, { useState } from 'react'
import '../style/contact.css'
import Contactdetails from './ContactApi'
import Navbar from './Navbar';
import { FaRegWindowClose, FaWhatsappSquare, FaVoicemail } from 'react-icons/fa';

export default function Contact() {
    const [showpopup, setShowpopup] = useState(false);
    const [ClickedId, setClickedId] = useState();
    const showcontact = (id) => {
        setShowpopup(true);
        setClickedId(id)
    }
    const hidecontact = () => {
        setShowpopup(false)
    }

    return (
        <>
            {showpopup &&
                <div className='contDetails'>
                    {
                        Contactdetails[ClickedId].team.map((teammembers) => {
                            return (
                                <div className='detailsaling'>
                                    {/* <div className='memimg'>
                                        <img src={teammembers.memimg} alt="teammemimg" />
                                    </div> */}
                                    <div className='namestyle'>
                                        {teammembers.name}
                                        {/* <div className='phone'>
                                            {teammembers.phone}
                                        </div> */}
                                        <div className='phone'>
                                            ({teammembers.position})
                                        </div>
                                    </div>
                                    {/* <div className='media'>
                                        <p><a href={`https://wa.me/${teammembers.phone}`} target="_blank" rel="noreferrer noopener"><FaWhatsappSquare /></a></p>
                                        <p><a href={"mailto: " + teammembers.email}><FaVoicemail /></a></p>
                                    </div> */}
                                    <div className='cancel' onClick={() => hidecontact()}>
                                        <FaRegWindowClose />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            }
            <div className='maincontainer'>
                <div className='headline'>
                    CONTACT TO
                </div>
                <div className='contentcont'>
                    {
                        Contactdetails.map((e) => {

                            return (
                                <div className='containercont' key={e.id} onClick={() => showcontact(e.id)}>
                                    <div className='contimg'>
                                        <img className='img' src={e.image} alt="tech" />
                                    </div>

                                    <div className='contdesc'>
                                        {e.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}