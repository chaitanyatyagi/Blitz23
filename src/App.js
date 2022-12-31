import "./App.css";
import { useState } from "react"
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Club from "./components/Club";
import Sponsor from "./components/Sponsor";
import Events from "./components/Events";
import Navbar from "./components/Navbar";

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/none" element={<Navbar login={isLoggedIn} setLogin={setIsLoggedIn} />} />
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Login setLogin={setIsLoggedIn} />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/profile" element={<Profile setLogin={setIsLoggedIn} />} />
					<Route path="/contactus" element={<Contact />} />
					<Route path="/clubs" element={<Club />} />
					<Route path="/sponsors" element={<Sponsor />}></Route>
					<Route path="/flagship-events" element={<Events club={0} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
