import './App.css';
import Home from './components/LoginPage/Home';
import LoginPage from './components/LoginPage/LoginPage';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage />} />
        <Route path='/login' element = {<LoginPage />} />
        <Route path='/home' element = {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
