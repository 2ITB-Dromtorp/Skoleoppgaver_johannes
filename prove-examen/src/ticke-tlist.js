// TicketList.js
import React from 'react';
import Ticket from './submit_ticket';
import './tt.css';

const TicketList = ({ tickets }) => {
  return (
    <div id="ticket_list">
      <h2>Billettliste</h2>
      {tickets.map((ticket) => {
        return (
          <Ticket key={ticket.id} ticket={ticket} />
        )
      })}
    </div>
  );
};

export default TicketList;
