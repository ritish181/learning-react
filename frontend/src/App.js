import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage />} />
        <Route path='/login' element = {<LoginPage />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/signup' element = {<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
