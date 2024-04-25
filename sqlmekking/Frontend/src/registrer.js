import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [elevId, setElevId] = useState('');
  const [fornavn, setFornavn] = useState('');
  const [eternavn, setEternavn] = useState('');
  const [klasseId, setKlasseId] = useState('');
  const [tlf, setTlf] = useState('');
  const [tlfP, setTlfP] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleElevIdChange = (e) => setElevId(e.target.value);
  const handleFornavnChange = (e) => setFornavn(e.target.value);
  const handleEternavnChange = (e) => setEternavn(e.target.value);
  const handleKlasseIdChange = (e) => setKlasseId(e.target.value);
  const handleTlfChange = (e) => setTlf(e.target.value);
  const handleTlfPChange = (e) => setTlfP(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', {
        elevId,
        fornavn,
        eternavn,
        klasseId,
        tlf,
        tlfP,
        password
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
        setPassword('');
      } else {
        setMessage('Failed to register user');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setMessage('Failed to register user');
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleRegisterSubmit}>
        {/* Input fields for all required data */}
        <div>
          <label>ElevID:</label>
          <input type="text" value={elevId} onChange={handleElevIdChange} required />
        </div>
        <div>
          <label>Fornavn:</label>
          <input type="text" value={fornavn} onChange={handleFornavnChange} required />
        </div>
        <div>
          <label>Eternavn:</label>
          <input type="text" value={eternavn} onChange={handleEternavnChange} required />
        </div>
        <div>
          <label>KlasseID:</label>
          <input type="text" value={klasseId} onChange={handleKlasseIdChange} required />
        </div>
        <div>
          <label>TLF:</label>
          <input type="text" value={tlf} onChange={handleTlfChange} required />
        </div>
        <div>
          <label>TLF_P:</label>
          <input type="text" value={tlfP} onChange={handleTlfPChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
        <Link to="/">
          <button type="button">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
