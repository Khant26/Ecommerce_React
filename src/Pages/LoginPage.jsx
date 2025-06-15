import React, { useState } from 'react';
import TopBar from '../Component/TopBar.jsx';
import NavBar from '../Component/NavBar.jsx';
import Footer from '../Component/Footer.jsx';
import HeroSectionLogIn from '../Component/HeroSectionLogIn.jsx';
import '../index.css'; // Importing the CSS file for global styles


// Main App Component
const Login = () => {
  return (
    <div>
      < TopBar />
      < NavBar />
      < HeroSectionLogIn />
      < Footer /> 
    </div>
  );
};

// Export the App component
export default Login;