import './App.css';
// import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
