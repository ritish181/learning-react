import React from 'react';
import styles from './styles/signup.module.css'; // Importing CSS module

const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupForm}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Sign Up</h2>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <input type="password" placeholder='password' className={styles.input} />
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
