import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "./config.json";
import "./Login.css"; // Import the CSS file

export default function Login() {
  const navigate = useNavigate();
  const defaultState = config.initialState;

  const [password, setPassword] = useState(defaultState.password);
  const [username, setUsername] = useState(defaultState.username);
  const [email, setEmail] = useState(defaultState.email);
  const [showPassword, setShowPassword] = useState(defaultState.showPassword);

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the input values match the default values
    if (
      username === defaultState.username &&
      email === defaultState.email &&
      password === defaultState.password
    ) {
      console.log("Login successful");
      // Redirect to the home page
      navigate("/home");
    } else {
      console.log("Invalid credentials");
    }
  }

  return (
    <>
      <div className="login-container">
        <h1>Login form</h1>
        <form onSubmit={handleSubmit}>
          <label>Brukernavn</label>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Passord</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input type="submit" value="Logg inn" />
        </form>
      </div>
    </>
  );
}
