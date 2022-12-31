import "./App.css";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Club from "./components/Club";
import Sponsor from "./components/Sponsor";
import Events from "./components/Events";
import PaytmRedirect from "./components/PaytmRedirect";

function App() {
	const [paytmFinalUrl,setpaytmFinalUrl]=useState("");
	const [resultData,setresultData]=useState({});
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/contactus" element={<Contact />} />
					<Route path="/clubs" element={<Club />} />
					<Route path="/sponsors" element={<Sponsor />}></Route>
					<Route path="/events" element={<Events club={0} setpaytmFinalUrl={setpaytmFinalUrl} setresultData={setresultData}  />} />
					<Route path="/initiatePayment" element={<PaytmRedirect resultData={resultData}  paytmFinalUrl={paytmFinalUrl} /> }/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
