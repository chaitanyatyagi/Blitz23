import "./App.css";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Club from "./components/Club";
import Sponsor from "./components/Sponsor";

function App() {
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
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
