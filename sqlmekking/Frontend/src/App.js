import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [equipment, setEquipment] = useState([]);
  const [equipmentThatIsBorrowed, setEquipmentThatIsBorrowed] = useState([]);
  const [borrowFormData, setBorrowFormData] = useState({
    utstyrsid: '',
    utlanttilelev: '',
    dato: ''
  });
  const [returnFormData, setReturnFormData] = useState({
    utstyrsid: ''
  });

  const fetchEquipment = async () => {
    try {
      const response = await axios.get('http://localhost:81/equipment');
      setEquipment(response.data.utstyrtype);
      setEquipmentThatIsBorrowed(response.data.utstyr);
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  const handleBorrowInputChange = (e) => {
    setBorrowFormData({ ...borrowFormData, [e.target.name]: e.target.value });
  };

  const handleReturnInputChange = (e) => {
    setReturnFormData({ ...returnFormData, [e.target.name]: e.target.value });
  };

  const handleBorrowSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:81/borrow', borrowFormData);
      fetchEquipment(); // Refresh equipment list after borrowing
    } catch (error) {
      console.error('Error borrowing equipment:', error);
    }
  };

  const handleReturnSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:81/return', returnFormData);
      fetchEquipment(); // Refresh equipment list after returning
    } catch (error) {
      console.error('Error returning equipment:', error);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div className="App">
      <h1>Equipment Borrowing System</h1>

      {/* Borrow Equipment Form */}
      <form onSubmit={handleBorrowSubmit}>
        <h2>Borrow Equipment</h2>
        <select name="utstyrsid" onChange={handleBorrowInputChange} required>
          <option value="">Select Equipment</option>
          {equipment&&equipment.map((item) => (
            <option key={item.utstyrstypeID} value={item.utstyrstypeID}>
              {item.Modell}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Student ID"
          name="utlanttilelev"
          value={borrowFormData.utlanttilelev}
          onChange={handleBorrowInputChange}
          required
        />
        <input
          type="date"
          placeholder="Borrow Date"
          name="dato"
          value={borrowFormData.dato}
          onChange={handleBorrowInputChange}
          required
        />
        <button type="submit">Borrow</button>
      </form>

      {/* Return Equipment Form */}
      <form onSubmit={handleReturnSubmit}>
        <h2>Return Equipment</h2>
        <select name="utstyrsid" onChange={handleReturnInputChange} required>
          <option value="">Select Equipment</option>
          {equipmentThatIsBorrowed&&equipmentThatIsBorrowed
            .filter((item) => item.utlanttilelev !== null)
            .map((item) => (
              <option key={item.utstyrsid} value={item.utstyrsid}>
                {item.utstyrstype} (Borrowed by Student ID: {item.utlanttilelev})
              </option>
            ))}
        </select>
        <button type="submit">Return</button>
      </form>

      {/* Display Equipment List */}
      <h2>Available Equipment</h2>
      <ul>
        {equipment&&equipment.map((item) => (
          <li key={item.utstyrstypeID}>
            {item.utstyrstypeID} ({item.utlanttilelev ? 'Borrowed' : 'Available'})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
