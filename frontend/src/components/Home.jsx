import React, { useEffect, useState } from 'react'
import styles from './styles/home.module.css';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

const Home = () => {

  const [loggedInUser, setLoggedInUser] =  useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  },[])

  const handleLogOut= (e) => {
    localStorage.removeItem('token');
    localStorage.getItem('loggedInUser');
    handleSuccess("User Logged Out.")
    setTimeout(()=>{
      navigate('/login');
    }, 1000)
    
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.homeHeading}>Welcome Home, {loggedInUser}</h2>
      <button onClick={handleLogOut}>logout</button>
    </div>
  )
}

export default Home;