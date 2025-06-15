import React, { useState } from 'react';
import TopBar from '../Component/TopBar.jsx';
import NavBar from '../Component/NavBar.jsx';
import Footer from '../Component/Footer.jsx';
import HeroSectionSignUp from '../Component/HeroSectionSignUp.jsx';
import '../index.css'; // Importing the CSS file for global styles


// Main App Component
const SignUp = () => {
  return (
    <div>
      < TopBar />
      < NavBar />
      < HeroSectionSignUp />  
      < Footer />
    </div>
  );
};

// Export the App component
export default SignUp;