import "../style/navbar.css"
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useState } from "react"


function Navbar() {
    const [IsMobile, SetIsMobile] = useState(false);
    const [cancleButton, setCanclebutton]= useState(true)
    const shownavlinks = () => {
        if (IsMobile) {
            SetIsMobile(false)
            setCanclebutton(true)

        }
        else {
            SetIsMobile(true)
            setCanclebutton(false)
        }
    }

    return (
        <>

            <div className="main_nav">
                <div className="leftlogo"><div className="leftlogoins"></div></div>
                <div className="nav_links">
                    <div className="menubar" id="menu">
                        <button className='btn' onClick={() => shownavlinks()}>{cancleButton?<FaBars />:<FaWindowClose/>}</button>
                    </div>
                    <div className={IsMobile?"mobile":"navbar"}>

                        <Link to="/" className="centertabs">HOME</Link>
                        <Link to="/pronites" className="centertabs">PRONITES</Link>
                        <Link to="/announcements" className="centertabs">RESULTS</Link>
                        <Link to="/events" className="centertabs">EVENTS</Link>
                        <Link to="/" className="centertabs">MORE</Link>
                        <Link to="/register" className="register">REGISTER</Link>
                        <Link to="/login" className="login">LOGIN</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar