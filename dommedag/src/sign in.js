// SignInPopup.js

import React, { useState } from 'react';

const SignInPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSignIn = () => {
    // Implement your actual sign-in logic here
    // For simplicity, let's check if the username and password are not empty
    if (username && password) {
      // Perform sign-in logic (replace with your own authentication logic)
      console.log('Signed in successfully!');
      onClose(); // Close the popup after successful sign-in
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="signin-popup">
      <h2>Sign In</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {isError && <p className="error-text">Invalid username or password</p>}
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPopup; 