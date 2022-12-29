import './App.css';
<<<<<<< HEAD
// import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
=======
//import MainPage from './components/MainPage';
//import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Profile from './components/Profile';
//import Registration from './components/Registration';
>>>>>>> 36c741b5b42ef29dca1e2df23ffcd039d5903247

function App() {
  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        <MainPage />
        <Contact />
=======
        <Profile/>
>>>>>>> 36c741b5b42ef29dca1e2df23ffcd039d5903247
      </div>
    </BrowserRouter>
  );
}

export default App;
