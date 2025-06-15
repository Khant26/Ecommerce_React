import React from 'react';// Corrected casing
import LoginPage from './Pages/LoginPage'; // Importing the LoginPage component
import SignUp from './Pages/SignupPage';
import Login from './Pages/LoginPage';
import ErrorPage from './Pages/404errorPage';
import NotFoundPage from './Component/404error';

function App() {
  return (
     <div>
      <ErrorPage/>
    </div>
  );
}

export default App;