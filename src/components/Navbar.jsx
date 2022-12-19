import "../style/navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftlogo"><div className="leftlogoins"></div></div>
            <Link to="/" className="centertabs">HOME</Link>
            <Link to="/pronites" className="centertabs">PRONITES</Link>
            <Link to="/announcements" className="centertabs">RESULTS</Link>
            <Link to="/events" className="centertabs">EVENTS</Link>
            <Link to="/" className="centertabs">MORE</Link>
            <Link to="/register" className="register">REGISTER</Link>
            <Link to="/login" className="login">LOGIN</Link>
        </div>
    )
}

export default Navbar