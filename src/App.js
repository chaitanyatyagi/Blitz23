import './App.css';
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
        <Profile/>
      </div>
    </BrowserRouter>
  );
}

export default App;
