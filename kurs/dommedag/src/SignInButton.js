import React from 'react';
import SignOffConfirmation from './SignOffConfirmation';

const SignInButton = ({ onSignIn, onSignOff }) => {
  const handleSignOffConfirmation = () => {
    onSignOff();
  };

  return (
    <div>
      <button onClick={onSignIn}>Sign In</button>
      <SignOffConfirmation onConfirm={handleSignOffConfirmation} />
    </div>
  );
};

export default SignInButton;