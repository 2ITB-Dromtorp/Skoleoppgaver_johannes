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
  const [notification, setNotification] = useState(null); // Notification state

  const fetchEquipment = async () => {
    try {
      const response = await axios.get('/equipment');
      setEquipment(response.data.utstyrtype); // Assuming the data structure has changed
      setEquipmentThatIsBorrowed(response.data.borrowedEquipment); // Assuming the data structure has changed
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
      await axios.post('/borrow', borrowFormData);
      fetchEquipment(); // Refresh equipment list after borrowing
      setNotification('Equipment borrowed successfully!');
      setTimeout(() => {
        setNotification(null); // Clear notification after some time
      }, 3000); // Clear notification after 3 seconds
    } catch (error) {
      console.error('Error borrowing equipment:', error);
    }
  };

  const handleReturnSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/return', returnFormData);
      fetchEquipment(); // Refresh equipment list after returning
      setNotification('Equipment returned successfully!');
      setTimeout(() => {
        setNotification(null); // Clear notification after some time
      }, 3000); // Clear notification after 3 seconds
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
                  {equipment && equipment.map((item) => (
                    <option key={item.utstyrsid} value={item.utstyrsid}>
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
            {equipmentThatIsBorrowed && equipmentThatIsBorrowed.map((item) => (
              <option key={item.utstyrsid} value={item.utstyrsid}>
                {item.utstyrsid} - {item.Modell} (Borrowed by ElevID: {item.utlanttilelev})
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


      {/* Notification Pop-up */}
      {notification && <div className="notification">{notification}</div>}

      {/* Display Equipment List */}
<h2>Available Equipment</h2>
<table>
  <thead>
    <tr>
      <th>Equipment ID</th>
      <th>Modell</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
     {equipment && equipment.map((item) => (
      <tr key={item.utstyrsid} className={equipmentThatIsBorrowed.find((a) => a.utstyrsid === item.utstyrsid) ? 'borrowed' : 'available'}>
        <td>{item.utstyrsid}</td>
        <td>{item.Modell}</td>
        <td>{equipmentThatIsBorrowed.find((a) => a.utstyrsid === item.utstyrsid) ? 'Borrowed' : 'Available'}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default Home;
