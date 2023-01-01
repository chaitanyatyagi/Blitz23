import "../style/navbar.css"
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from "axios"
import Cookies from "universal-cookie"



function Navbar({ isLoggedIn }) {
    const cookies=new Cookies();
    const chngBtn = (e) => {
        e.preventDefault();
        
        // axios.get('http://127.0.0.1:2080/users/logout')
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.data.status === "error")
        //             window.alert(response.data.message)
        //         else {
        //             window.alert(response.data.message);
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

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
                        {
                            isLoggedIn ? <Link to="/register" className="centertabs" onClick={() => {cookies.remove('jwt',{ path: '/' });window.location.reload()}}>LOGOUT</Link> : <Link to="/register" className="centertabs">LOGIN</Link>
                        }
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar