// TicketForm.js
import React, { useState } from 'react';

const TicketForm = ({ setTickets }) => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [navn, setNavn] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets((prev) => {
      return [...prev, {
        title: title,
        navn: navn,
        email: email,
        description: description,
        status: "Åpen",
      }]
    })
    setTitle('');
    setNavn('');
    setEmail('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ny billett</h2>
      <label>
        Tittel:
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Navn:
        <input required type="text" value={navn} onChange={(e) => setNavn(e.target.value)} />
      </label>
      <label>
        Email:
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Beskrivelse:
        <textarea required value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Opprett billett</button>
    </form>
  );
};

export default TicketForm;
