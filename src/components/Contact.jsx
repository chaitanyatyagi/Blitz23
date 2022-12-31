import React, { useState } from 'react'
import '../style/contact.css'
import Contactdetails from './ContactApi'
import Navbar from './Navbar';
import { FaRegWindowClose, FaWhatsappSquare, FaInstagramSquare, FaVoicemail, FaLinkedinIn } from 'react-icons/fa';
// import Navbar from './Navbar';

export default function Contact() {

    const [phoneNo, setPhoneNo] = useState();
    const [name, setName] = useState();
    const [name1, setName1] = useState();
    const [name2, setName2] = useState();
    const [emailId, setemailId] = useState();
    const [showpopup, setShowpopup] = useState(false);
    const [memimg, setMemimg] = useState()
    const [memimg1, setMemimg1] = useState()
    const [memimg2, setMemimg2] = useState()
    const showcontact = (elm, id) => {
        const phone = Contactdetails.find(element => element.id === id).phone
        const email = Contactdetails.find(element => element.id === id).email
        const name = Contactdetails.find(element => element.id === id).name0
        const name1 = Contactdetails.find(element => element.id === id).name1
        const name2 = Contactdetails.find(element => element.id === id).name2
        const teammemimg = Contactdetails.find(element => element.id === id).memimg0
        const teammemimg1 = Contactdetails.find(element => element.id === id).memimg1
        const teammemimg2 = Contactdetails.find(element => element.id === id).memimg2
        setPhoneNo(phone);
        setemailId(email);
        setName(name);
        setName1(name1);
        setName2(name2);
        setMemimg(teammemimg)
        setMemimg1(teammemimg1)
        setMemimg2(teammemimg2)
        setShowpopup(true);
    }
    const hidecontact = () => {
        setShowpopup(false)
    }

    return (
        <>
            <Navbar />
            {showpopup &&
                <div className='contDetails'>
                    <div className='detailsaling'>
                        <div className='memimg'>
                            <img src={memimg} alt="teammemimg" />
                        </div>
                        <div className='namestyle'>
                            {name}
                            <div className='phone'>
                                {phoneNo}
                            </div>
                        </div>
                        <div className='media'>
                            <p><a href='https://instagram.com/mintrago2022' target="_blank" rel="noreferrer noopener"><FaInstagramSquare /></a></p>
                            <p><a href={"mailto: " + emailId}><FaVoicemail /></a></p>
                            <p><a href='https://wa.me/919798827707' target="_blank" rel="noreferrer noopener"><FaWhatsappSquare /></a></p>
                            <p><a href='https://www.facebook.com/profile.php?id=100087409022493' target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a></p>
                        </div>
                        <div className='cancel' onClick={() => hidecontact()}>
                            <FaRegWindowClose />
                        </div>
                    </div>
                    <div className='detailsaling'>
                        <div className='memimg'>
                            <img src={memimg1} alt="teammemimg" />
                        </div>
                        <div className='namestyle'>
                            {name1}
                            <div className='phone'>
                                {phoneNo}
                            </div>
                        </div>
                        <div className='media'>
                            <p><a href='https://instagram.com/mintrago2022' target="_blank" rel="noreferrer noopener"><FaInstagramSquare /></a></p>
                            <p><a href={"mailto: " + emailId}><FaVoicemail /></a></p>
                            <p><a href='https://wa.me/919798827707' target="_blank" rel="noreferrer noopener"><FaWhatsappSquare /></a></p>
                            <p><a href='https://www.facebook.com/profile.php?id=100087409022493' target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a></p>
                        </div>
                        <div className='cancel' onClick={() => hidecontact()}>
                            <FaRegWindowClose />
                        </div>
                    </div>
                    <div className='detailsaling'>
                        <div className='memimg'>
                            <img src={memimg2} alt="teammemimg" />
                        </div>
                        <div className='namestyle'>
                            {name2}
                            <div className='phone'>
                                {phoneNo}
                            </div>
                        </div>
                        <div className='media'>
                            <p><a href='https://instagram.com/mintrago2022' target="_blank" rel="noreferrer noopener"><FaInstagramSquare /></a></p>
                            <p><a href={"mailto: " + emailId}><FaVoicemail /></a></p>
                            <p><a href='https://wa.me/919798827707' target="_blank" rel="noreferrer noopener"><FaWhatsappSquare /></a></p>
                            <p><a href='https://www.facebook.com/profile.php?id=100087409022493' target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a></p>
                        </div>
                        <div className='cancel' onClick={() => hidecontact()}>
                            <FaRegWindowClose />
                        </div>
                    </div>
                </div>
            }
            <Navbar />
            <div className='maincontainer'>
                <div className='headline'>
                    CONTACT TO
                </div>
                <div className='contentcont'>
                    {
                        Contactdetails.map((e) => {

                            return (
                                <div className='containercont' key={e.id} onClick={elm => showcontact(elm, e.id)}>
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
