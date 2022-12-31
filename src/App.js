import "./App.css";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Club from "./components/Club";
import Events from "./components/Events";

function App() {
	const [club, setClub] = React.useState(1);
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<MainPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/contactus" element={<Contact />} />
					<Route path="/clubs" element={<Club active={club} change={setClub} />} />
					<Route path="/flagship-events" element={<Events club={0} />} />
					<Route path="/events" element={<Events club={club} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
