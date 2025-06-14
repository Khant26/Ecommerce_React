import React from 'react';

const LoginButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Login
    </button>
  );
};

export default LoginButton;