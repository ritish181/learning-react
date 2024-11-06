import React from "react";
import { useState } from "react";
import styles from "./styles/signup.module.css"; // Importing CSS module
import { ToastContainer } from "react-toastify";
import { handleFailure, handleSuccess } from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      return handleFailure("All fields are required.");
    }
    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await axios.post(url, signUpInfo, {
        validateStatus: () => true,
      });
      console.log(response.data);
      const { success, message, error } = response.data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
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
    const copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupForm}>
        <form onSubmit={handleSignUp} className={styles.form}>
          <h2>Sign Up</h2>
          <input
            type="text"
            onChange={handleChange}
            autoFocus
            name="name"
            value={signUpInfo.name}
            placeholder="name"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={signUpInfo.email}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={signUpInfo.password}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>

          <p>
            Already Registered?<a href="/login">login here</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
