import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function Home() {
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
    <div className="Home">
      <h1>Equipment Borrowing System</h1>

      {/* Borrow Equipment Form */}
      <form onSubmit={handleBorrowSubmit}>
        <h2>Borrow Equipment</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <select name="utstyrsid" onChange={handleBorrowInputChange} required>
                  <option value="">Select Equipment</option>
                  {equipment.map((item) => (
                    <option key={item.utstyrstypeID} value={item.utstyrstypeID}>
                      {item.Modell}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Student ID"
                  name="utlanttilelev"
                  value={borrowFormData.utlanttilelev}
                  onChange={handleBorrowInputChange}
                  required
                />
              </td>
              <td>
                <input
                  type="date"
                  placeholder="Borrow Date"
                  name="dato"
                  value={borrowFormData.dato}
                  onChange={handleBorrowInputChange}
                  required
                />
              </td>
              <td>
                <button type="submit">Borrow</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Return Equipment Form */}
      <form onSubmit={handleReturnSubmit}>
        <h2>Return Equipment</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <select name="utstyrsid" onChange={handleReturnInputChange} required>
                  <option value="">Select Equipment</option>
                  {equipmentThatIsBorrowed
                    .filter((item) => item.utlanttilelev !== null)
                    .map((item) => (
                      <option key={item.utstyrsid} value={item.utstyrsid}>
                        {item.utstyrstype} (Borrowed by Student ID: {item.utlanttilelev})
                      </option>
                    ))}
                </select>
              </td>
              <td>
                <button type="submit">Return</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Display Equipment List */}
      <h2>Available Equipment</h2>
      <table>
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Model</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
           {equipment.map((item) => (
            <tr key={item.utstyrstypeID} className={equipmentThatIsBorrowed.find((a) => a.utstyrstype === item.utstyrstypeID) ? 'borrowed' : 'available'}>
              <td>{item.utstyrstypeID}</td>
              <td>{item.Modell}</td>
              <td>{equipmentThatIsBorrowed.find((a) => a.utstyrstype === item.utstyrstypeID) ? 'Borrowed' : 'Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
