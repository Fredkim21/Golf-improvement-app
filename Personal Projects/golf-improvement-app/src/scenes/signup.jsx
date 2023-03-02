import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import bcrypt from 'bcrypt';
import axios from 'axios';


function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // send data to backend to create new user
    console.log("Username:", username);
    console.log("Password:", hashedPassword);
    axios.post('/api/signup', {
      username,
      password: hashedPassword,
    })
    then((response) => {
      console.log(response.data);
      // send user to their profile page
      const userId = response.data.user_id;
      history.push(`/profile?user_id=${userId}`);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Signup</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default SignUpPage;