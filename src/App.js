import './App.css';
import MainPage from './components/MainPage';
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Profile from './components/Profile';
import Registration from './components/Registration';

// import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
//import MainPage from './components/MainPage';
//import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Profile from './components/Profile';
//import Registration from './components/Registration';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

        <MainPage />
        <Contact />
        <Profile />

      </div>
    </BrowserRouter>
  );
}

export default App;
