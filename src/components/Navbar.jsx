import "../style/navbar.css"
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'




function Navbar(props) {
    const {
        login,
        setLogin
    } = props
    const [IsMobile, SetIsMobile] = useState(false);
    const [cancleButton, setCanclebutton] = useState(true)
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
                        <button className='btn' onClick={() => shownavlinks()}>{cancleButton ? <FaBars /> : <FaWindowClose />}</button>
                    </div>
                    <div className={IsMobile ? "mobile" : "laptop"}>

                        <Link to="/" className="centertabs">HOME</Link>
                        <Link to="/pronites" className="centertabs">PRONITES</Link>
                        <Link to="/announcements" className="centertabs">RESULTS</Link>

                        <div className="navdrop">
                            <button className="dropbtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                EVENTS
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                <li className="dropdown-item text-white"><Link to="/flagship-events" className="dropdown-item text-white">FLAGSHIP EVENTS</Link></li>
                                <li className="dropdown-item text-white"><Link to="/clubs" className="dropdown-item text-white">EVENTS</Link></li>
                            </ul>
                        </div>
                        {/* <Link to="/contactus" className="centertabs">TEAM</Link> */}
                        <div className="dropdown">
                            <button className="dropbtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                MORE
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                <li className="dropdown-item text-white"><Link to="/hospitality" className="dropdown-item text-white">HOSPITALITY</Link></li>
                                <li className="dropdown-item text-white"><Link to="/sponsors" className="dropdown-item text-white">SPONSORS</Link></li>
                                <li className="dropdown-item text-white"><Link to="/merchandise" className="dropdown-item text-white">MERCHANDISE</Link></li>
                                <li className="dropdown-item text-white"><Link to="/team" className="dropdown-item text-white">OUT TEAM</Link></li>
                            </ul>
                        </div>
                        <Link to="/register" className="register">REGISTER</Link>
                        {
                            login ? <Link to="/login" className="login" onClick={() => setLogin(false)}>LOGOUT</Link> : <Link to="/login" className="login">LOGIN</Link>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar