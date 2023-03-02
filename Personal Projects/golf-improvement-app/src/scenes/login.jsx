import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcrypt';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    // send data to backend to verify
    axios.post('/api/login', {
      username,
      password: hashedPassword
    })
    .then(response => {
      console.log(response.data);
      // sending down userId so profile can grab userId from table
      const userId = response.data.user_id;
      navigate(`/profile?user_id=${userId}`);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Login</h1>
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

        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default LoginPage;