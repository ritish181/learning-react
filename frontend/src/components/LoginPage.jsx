import styles from "./styles/loginPage.module.css";
import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleFailure, handleSuccess } from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  
  const handleLogIn = async (e) => {
    e.preventDefault();
    const { email, password } = logInInfo;
    if ( !email || !password ){
      return handleFailure("All fields are required.");
    }
    try {
      const url = "http://localhost:5000/auth/login";
      const response = await axios.post(url, logInInfo, {
        validateStatus: () => true,
      });
      console.log(response.data);
      const { success, message, error, name, jwtToken } = response.data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
      } 
      else if (error) {
        const details = error?.details[0].message;
        handleFailure(details);
      }
      else if(!success)
      {
        handleFailure(message);
      }
    } catch (error) {
      handleFailure(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLogInInfo = { ...logInInfo };
    copyLogInInfo[name] = value;
    setLogInInfo(copyLogInInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleLogIn} className={styles.loginForm}>
          <h3 className={styles.loginHeading}>Login</h3>
          <br />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            autoFocus
            name="email"
            className={styles.username}
            type="email"
            value={logInInfo.email}
            onChange={handleChange}
            placeholder="email"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            className={styles.password}
            type="password"
            value={logInInfo.password}
            onChange={handleChange}
            placeholder="password"
          />
          <br />
          <button type="submit">login</button>
          <p className={styles.forgetPassword}>
            New User ?<a href="/signup">register here</a>
          </p>
        </form>
        <ToastContainer />
        <p>or log in using</p>
        <div className={styles.loginFooter}>
          <img className={styles.image} src={Google} alt="" />
          <img className={styles.image} src={Facebook} alt="" />
          <img className={styles.image} src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
