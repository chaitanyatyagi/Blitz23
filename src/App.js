import './App.css';
// import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
