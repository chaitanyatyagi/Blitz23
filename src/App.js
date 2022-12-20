import './App.css';
//import MainPage from './components/MainPage';
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login/>
      </div>
    </BrowserRouter>
  );
}

export default App;
