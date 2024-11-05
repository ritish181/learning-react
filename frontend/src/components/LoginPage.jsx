import React, { useEffect, useState } from 'react';
import styles from './styles/loginPage.module.css';

import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
      setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(`username_${username}`,username);
    localStorage.setItem(`password_${username}`,password);
    console.log(username, password);
    
    if(username == localStorage.getItem(`username_${username}`) && password == localStorage.getItem(`password_${username}`) )
    {
      navigate('/home');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h3 className={styles.loginHeading}>Login</h3><br/>
          <label htmlFor={styles.username}>Username:</label>
          <input id="username" className = {styles.username} type="text" value={username} onChange={handleUsernameChange} /><br />
          <label htmlFor={styles.password} >Password:</label>
          <input id="password"  className={styles.password} type="password" value={password} onChange={handlePasswordChange}/><br />
          <button type='submit' >login</button>
          <p className={styles.forgetPassword}>New User ?<a href="/signup">register here</a></p>
        </form>
          <p>or log in using</p>
          <div className={styles.loginFooter}>
              <img className={styles.image} src={Google} alt="" />
              <img className={styles.image} src={Facebook} alt="" />
              <img className={styles.image} src={Twitter} alt="" />
          </div>
      </div>
    </div>
  )
}

export default LoginPage