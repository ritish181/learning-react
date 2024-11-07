import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateBrowsing = ( { element } )=> {
    return isAuthenticated ? element : <Navigate to='/login' />;
  };

  
  return (
    <div>
        <RefreshHandler setIsAuthenticated = {setIsAuthenticated}/>
        <Routes>
          <Route path='/' element = {<LoginPage />} />
          <Route path='/login' element = {<LoginPage />} />
          <Route path='/home' element = {<PrivateBrowsing element= {<Home />}  />} />
          <Route path='/signup' element = {<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
