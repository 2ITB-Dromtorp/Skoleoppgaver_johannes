import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

function Register() {
  const [elevId, setElevId] = useState('');
  const [fornavn, setFornavn] = useState('');
  const [eternavn, setEternavn] = useState('');
  const [klasseId, setKlasseId] = useState('');
  const [tlf, setTlf] = useState('');
  const [tlfP, setTlfP] = useState('');
  const [brukernavn, setBrukernavn] = useState('');
  const [passord, setPassord] = useState('');
  const [message, setMessage] = useState('');

  const handleElevIdChange = (e) => setElevId(e.target.value);
  const handleFornavnChange = (e) => setFornavn(e.target.value);
  const handleEternavnChange = (e) => setEternavn(e.target.value);
  const handleKlasseIdChange = (e) => setKlasseId(e.target.value);
  const handleTlfChange = (e) => setTlf(e.target.value);
  const handleTlfPChange = (e) => setTlfP(e.target.value);
  const handleBrukernavnChange = (e) => setBrukernavn(e.target.value);
  const handlePassordChange = (e) => setPassord(e.target.value);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        elevId,
        fornavn,
        eternavn,
        klasseId,
        tlf,
        tlfP,
        brukernavn,
        passord
      });
      if (response.status === 201) {
        setMessage('User registered successfully');
        // Clear all form fields
        setElevId('');
        setFornavn('');
        setEternavn('');
        setKlasseId('');
        setTlf('');
        setTlfP('');
        setBrukernavn('');
        setPassord('');
      } else {
        setMessage('Failed to register user');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setMessage('Failed to register user');
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleRegisterSubmit}>
        {/* Input fields for all required data */}
        <div>
          <label htmlFor="elevId">ElevID:</label>
          <input type="text" id="elevId" placeholder="Enter ElevID" value={elevId} onChange={handleElevIdChange} required />
        </div>
        <div>
          <label htmlFor="fornavn">Fornavn:</label>
          <input type="text" id="fornavn" placeholder="Enter Fornavn" value={fornavn} onChange={handleFornavnChange} required />
        </div>
        <div>
          <label htmlFor="eternavn">Eternavn:</label>
          <input type="text" id="eternavn" placeholder="Enter Eternavn" value={eternavn} onChange={handleEternavnChange} required />
        </div>
        <div>
          <label htmlFor="klasseId">KlasseID:</label>
          <input type="text" id="klasseId" placeholder="Enter KlasseID" value={klasseId} onChange={handleKlasseIdChange} required />
        </div>
        <div>
          <label htmlFor="tlf">TLF:</label>
          <input type="text" id="tlf" placeholder="Enter TLF" value={tlf} onChange={handleTlfChange} required />
        </div>
        <div>
          <label htmlFor="tlfP">TLF_P:</label>
          <input type="text" id="tlfP" placeholder="Enter TLF_P" value={tlfP} onChange={handleTlfPChange} required />
        </div>
        <div>
          <label htmlFor="brukernavn">Brukernavn:</label>
          <input type="text" id="brukernavn" placeholder="Enter Brukernavn" value={brukernavn} onChange={handleBrukernavnChange} required />
        </div>
        <div>
          <label htmlFor="passord">Passord:</label>
          <input type="password" id="passord" placeholder="Enter Passord" value={passord} onChange={handlePassordChange} required />
        </div>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </form>
    </div>
  );
}

export default Register;
