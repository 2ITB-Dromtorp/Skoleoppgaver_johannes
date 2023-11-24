import React from 'react';

const SignOffConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <p>Are you sure you want to sign off?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default SignOffConfirmation;