import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className='ticket'>
      <h3>{ticket.title}</h3>
      <p>{ticket.navn}</p>
      <p>{ticket.email}</p>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
};

export default Ticket;