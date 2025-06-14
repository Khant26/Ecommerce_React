import React from 'react';
import LoginButton from '../Component/Button';

function HomePage() {
  function handleLoginClick() {
    alert('Login button clicked!');
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <LoginButton onClick={handleLoginClick} />
      <h1>This is my name</h1>
    </div>
  );
}

export default HomePage;