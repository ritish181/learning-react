import React, { useEffect, useState } from 'react';
import styles from './styles/users.module.css';
import axios from 'axios';

const Users = () => {

  const [usersInfo, setUsersInfo] = useState([]);
  useEffect(()=>{
    const fetchUsers = async () => {
      const url = 'http://localhost:5000/users';
      const response = await axios.get(url);
      const {users} = response.data;
      setUsersInfo(users);
    }
    fetchUsers();
  },[]);

  return (
    <div className={styles.container}>
      <h1 className={styles.usersHeading}>Users Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usersInfo.map((user, index)=>(
              <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users