import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { students } from './../database/dataSet';
import { NavBar } from './NavBar';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check the credentials
    const student = students.find(
      (student) => student.username === username && student.password === password
    );

    if (student) {
      // Login successful, redirect to the dashboard
      history.push('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <>
     <NavBar />
   
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
    </>
  );
};

export default LoginPage;
