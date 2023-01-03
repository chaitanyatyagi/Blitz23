import "../style/navbar.css"
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
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
                        <Link to="/announcements" className="centertabs">ANNOUNCEMENT</Link>

                        <div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="MORE"
                                menuVariant="dark"
                                className="navdrop"
                            >
                                <NavDropdown.Item href="#action/3.2">
                                    <Link className="text-white">HOSPITALITY</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item><Link className="text-white">SPONSORS</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="text-white">MERCHANDISE</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="text-white">OUT TEAM</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="EVENTS"
                                menuVariant="dark"
                                className="navdrop"
                            >
                                <NavDropdown.Item>
                                    <Link className="text-white">FLAGSHIP EVENTS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link className="text-white">EVENTS</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        {/* <div className="dropdown">
                            <button className="dropbtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                EVENTS
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                <li className="dropdown-item"><Link className="text-white">FLAGSHIP EVENTS</Link></li>
                                <li className="dropdown-item"><Link className="text-white">EVENTS</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                MORE
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                <li className="dropdown-item"><Link className="text-white">HOSPITALITY</Link></li>
                                <li className="dropdown-item"><Link className="text-white">SPONSORS</Link></li>
                                <li className="dropdown-item"><Link className="text-white">MERCHANDISE</Link></li>
                                <li className="dropdown-item"><Link className="text-white">OUT TEAM</Link></li>
                            </ul>
                        </div> */}

                        <div>
                            <Link to="/register" className="register">REGISTER</Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar