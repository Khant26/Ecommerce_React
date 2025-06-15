import React from 'react';// Corrected casing
import LoginPage from './Pages/LoginPage'; // Importing the LoginPage component
import SignUp from './Pages/SignupPage';
import Login from './Pages/LoginPage';
import HomePage from './Pages/HomePage'; // Importing the HomePage component
import ErrorPage from './Pages/404errorPage'; // Importing the ErrorPage component

function App() {
  return (
    <div>
      <ErrorPage />
    </div>
  );
}

export default App;