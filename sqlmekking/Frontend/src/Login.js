import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [ElevID, setElevID] = useState('');
  const [Fornavn, setFornavn] = useState('');
  const [Etternavn, setEtternavn] = useState('');
  const [KlasseID, setKlasseID] = useState('');
  const [TLF, setTLF] = useState('');
  const [TLF_P, setTLFP] = useState('');
  const [password, setPassword] = useState('');

  const handleElevIDChange = (e) => {
    setElevID(e.target.value);
  };

  const handleFornavnChange = (e) => {
    setFornavn(e.target.value);
  };

  const handleEtternavnChange = (e) => {
    setEtternavn(e.target.value);
  };

  const handleKlasseIDChange = (e) => {
    setKlasseID(e.target.value);
  };

  const handleTLFChange = (e) => {
    setTLF(e.target.value);
  };

  const handleTLFPChange = (e) => {
    setTLFP(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        ElevID,
        Fornavn,
        Etternavn,
        KlasseID,
        TLF,
        TLF_P,
        password
      });
      if (response.status === 200) {
        onLogin(); // Notify parent component (App) of successful login
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>ElevID:</label>
          <input type="text" value={ElevID} onChange={handleElevIDChange} required />
        </div>
        <div>
          <label>Fornavn:</label>
          <input type="text" value={Fornavn} onChange={handleFornavnChange} required />
        </div>
        <div>
          <label>Etternavn:</label>
          <input type="text" value={Etternavn} onChange={handleEtternavnChange} required />
        </div>
        <div>
          <label>KlasseID:</label>
          <input type="text" value={KlasseID} onChange={handleKlasseIDChange} required />
        </div>
        <div>
          <label>TLF:</label>
          <input type="text" value={TLF} onChange={handleTLFChange} required />
        </div>
        <div>
          <label>TLF_P:</label>
          <input type="text" value={TLF_P} onChange={handleTLFPChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
