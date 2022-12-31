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
import { Cookies } from "react-cookie"

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const cookies = new Cookies()
	useEffect(() => {
		const token = cookies.get('jwt')
		if (!token) {
			setIsLoggedIn(false)
		}
		else {
			setIsLoggedIn(true)
		}
	})

	const [paytmFinalUrl, setpaytmFinalUrl] = useState("");
	const [resultData, setresultData] = useState({});


	return (
		<BrowserRouter>
			<div className="App">
				<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
					<Route path="/contactus" element={<Contact />} />
					<Route path="/clubs" element={<Club />} />
					<Route path="/sponsors" element={<Sponsor />}></Route>
					<Route path="/flagship-events" element={<Events club={0} />} />
					<Route path="/events" element={<Events club={0} setpaytmFinalUrl={setpaytmFinalUrl} setresultData={setresultData} />} />
					<Route path="/initiatePayment" element={<PaytmRedirect resultData={resultData} paytmFinalUrl={paytmFinalUrl} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
