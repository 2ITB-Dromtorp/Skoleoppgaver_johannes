// Popup.js

import React from 'react';
import './App.css'; // Import the CSS file for styling

const Popup = ({ onClose, content }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        {content}
      </div>
    </div>
  );
};

export default Popup;