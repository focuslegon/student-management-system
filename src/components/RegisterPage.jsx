import React, { useState } from 'react';
import { NavBar } from './NavBar';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic or API call here
    // Assuming registration is successful for demo purposes
    setIsRegistered(true);
  };

  return (
    <>
       <NavBar />
       <div className="signup-container">
    
    <h2>Sign Up</h2>
    {isRegistered ? (
      <p>Registration successful! You can now log in.</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    )}
  </div>
       </>
   
  );
};

export default RegisterPage;
