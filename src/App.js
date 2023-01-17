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
import RulesRegulation from "./components/RulesRegulation"
import Payment from "./components/Payment";
import VerifyOTP from "./components/VerifyOTP";
import Accomodation from "./components/Accomodation"
import Preloader from "./components/Preloader";
import BrandAmbassador from "./components/BrandAmbassador";
import axios from "axios"

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userInfo, setUserInfo] = useState({})
	const cookies = new Cookies()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, [])

	useEffect(() => {
		const token = cookies.get("jwt");
		if (token) {
			setIsLoggedIn(true)
			axios.post(`${process.env.REACT_APP_SERVER}/users/getuser`, { 'jwt': token })
				.then(function (response) {
					if (response.data.status === "error")
						window.alert(response.data.message)
					else {
						setUserInfo(response.data)
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		else {
			setIsLoggedIn(false)
		}
	}, [isLoggedIn])


	const [paytmFinalUrl, setpaytmFinalUrl] = useState("");
	const [resultData, setresultData] = useState({});
	const [club, setClub] = React.useState(1);


	return (
		<BrowserRouter>
			{
				loading ? <Preloader /> : <div className="App">
					<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
						<Route path="/register" element={<Registration setIsLoggedIn={setIsLoggedIn} />} />
						<Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} userInfo={userInfo} />} />
						<Route path="/contactus" element={<Contact />} />
						<Route path="/sponsors" element={<Sponsor />}></Route>
						<Route path="/flagship-events" element={<Events userInfo={userInfo} club={0} setpaytmFinalUrl={setpaytmFinalUrl} setresultData={setresultData} isLoggedIn={isLoggedIn} />} />
						<Route path="/club-blitz-events" element={<Events userInfo={userInfo} club={club} setpaytmFinalUrl={setpaytmFinalUrl} setresultData={setresultData} isLoggedIn={isLoggedIn} />} />
						<Route path="/initiatePayment" element={<PaytmRedirect resultData={resultData} paytmFinalUrl={paytmFinalUrl} />} />
						<Route path="/events" element={<Club active={club} change={setClub} />} />
						<Route path="/forgotpassword" element={<ForgotPassword />} />
						<Route path="/resetpassword" element={<ResetPassword />} />
						<Route path="/rulebook" element={<RulesRegulation />} />
						<Route path="/payment" element={<Payment />} />
						<Route path="/verifyOtp" element={<VerifyOTP />} />
						<Route path="/accomodation" element={<Accomodation isLoggedIn={isLoggedIn} userInfo={userInfo} />} />
						<Route path="/campus-ambassador" element={<BrandAmbassador />} />s
					</Routes>
				</div>
			}
		</BrowserRouter>
	);
}

export default App;
