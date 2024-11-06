import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateBrowsing = ()=> {
    
  };

  return (
      <Routes>
        <Route path='/' element = {<LoginPage />} />
        <Route path='/login' element = {<LoginPage />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/signup' element = {<Signup />} />
      </Routes>
  );
}

export default App;
