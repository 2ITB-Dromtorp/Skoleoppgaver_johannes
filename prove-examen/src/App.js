
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketList from './ticke-tlist';
import SubmitTicket from './ticket-form';
import Nav from './nav'

import "./App.css"

function App() {
  const [tickets, setTickets] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<SubmitTicket setTickets={setTickets}/>} />
          <Route path="/tickets" element={<TicketList tickets={tickets}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
