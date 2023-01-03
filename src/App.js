import "./App.css";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Club from "./components/Club";
import Sponsor from "./components/Sponsor";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import PaytmRedirect from "./components/PaytmRedirect";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Cookies from 'universal-cookie';
// import SponsorFlash from "./components/SponsorFlash";

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const cookies = new Cookies()
	useEffect(() => {
		const token = cookies.get('jwt')
		if (token) {
			setIsLoggedIn(true)
		}
		else {
			setIsLoggedIn(false)
		}
	}, [])

	const [paytmFinalUrl, setpaytmFinalUrl] = useState("");
	const [resultData, setresultData] = useState({});


	const [club, setClub] = React.useState(1);
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
					<Route path="/register" element={<Registration setIsLoggedIn={setIsLoggedIn} />} />
					<Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
					<Route path="/contactus" element={<Contact />} />
					<Route path="/sponsors" element={<Sponsor />}></Route>
					<Route path="/flagship-events" element={<Events club={0} setpaytmFinalUrl={setpaytmFinalUrl} setresultData={setresultData} isLoggedIn={isLoggedIn} />} />
					<Route path="/events" element={<Events club={club} setpaytmFinalUrl={setpaytmFinalUrl} setresultData={setresultData} isLoggedIn={isLoggedIn} />} />
					<Route path="/initiatePayment" element={<PaytmRedirect resultData={resultData} paytmFinalUrl={paytmFinalUrl} />} />
					<Route path="/clubs" element={<Club active={club} change={setClub} />} />
					<Route path="/forgotpassword" element={<ForgotPassword />} />
					<Route path="/resetpassword" element={<ResetPassword />} />

					{/* <Route path="/events" element={<Events club={club} />} /> */}
				</Routes>
			</div>
			{/* <SponsorFlash /> */}
		</BrowserRouter>
	);
}

export default App;
