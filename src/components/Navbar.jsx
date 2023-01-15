import "../style/navbar.css"
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useState, useRef } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Cookies from "universal-cookie"

import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar({ isLoggedIn }) {
    const navRef = useRef()
    const cookies = new Cookies()
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
    const hideNav = () => {
        // navRef.current.classList.remove("mobile")
        // navRef.current.classList.add("laptop")
        SetIsMobile(false)
        setCanclebutton(true)
    }

    return (
        <>
            <div className="main_nav" >
                <div className="leftlogo"><Link to="/" onClick={() => hideNav()} onBlur={() => hideNav()} className="leftlogoins1"></Link><Link to="/" onClick={() => hideNav()} onBlur={() => hideNav()} className="leftlogoins"></Link></div>
                <div className="nav_links">
                    <div className="menubar" id="menu">
                        <button className='btn' onClick={() => shownavlinks()}>{cancleButton ? <FaBars /> : <FaWindowClose />}</button>
                    </div>
                    <div className={IsMobile ? "mobile" : "laptop"} ref={navRef}>
                        {/* <Link to="/" className="centertabs" onClick={() => hideNav()} onBlur={() => hideNav()}>HOME</Link> */}
                        <Link to="/events" className="centertabs" onClick={() => hideNav()} onBlur={() => hideNav()}>EVENTS</Link>
                        <Link to="/flagship-events" className="centertabs" onClick={() => hideNav()} onBlur={() => hideNav()}>FLAGSHIP EVENTS</Link>
                        <Link to="/accomodation" className="centertabs" onClick={() => hideNav()} onBlur={() => hideNav()}>HOSPITALITY</Link>
                        <div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="MORE"
                                menuVariant="dark"
                                className="navdrop"
                            >
                                <NavDropdown.Item><Link to="/campus-ambassador" className="text-white" onClick={() => hideNav()} onBlur={() => hideNav()}>CAMPUS-AMBASSADOR</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/rulebook" className="text-white" onClick={() => hideNav()} onBlur={() => hideNav()}>RULEBOOK</Link></NavDropdown.Item>
                                {/* <NavDropdown.Item><Link className="text-white">HOSPITALITY</Link></NavDropdown.Item> */}
                                <NavDropdown.Item><Link to="/contactus" className="text-white" onClick={() => hideNav()} onBlur={() => hideNav()}>OUR TEAM</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        {/* <div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="EVENTS"
                                menuVariant="dark"
                                className="navdrop"
                            >
                                <NavDropdown.Item>
                                    <Link to="flagship-events" className="text-white">FLAGSHIP EVENTS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link to="events" className="text-white">EVENTS</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div> */}
                        {/* <div> */}
                        {/* <Link to="/register" className="register">REGISTER</Link> */}
                        {
                            isLoggedIn ? <Link to="/register" className="register" onClick={() => {
                                cookies.remove('jwt', { path: '/' }); cookies.remove('userId'); window.location.reload();
                                hideNav()
                            }} >LOGOUT</Link> : <Link to="/register" className="register" onClick={() => hideNav()} onBlur={() => hideNav()}>REGISTER</Link>
                        }
                        {
                            isLoggedIn ? <Link to="/profile" className="register" onClick={() => hideNav()} onBlur={() => hideNav()}>PROFILE</Link> : " "
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
