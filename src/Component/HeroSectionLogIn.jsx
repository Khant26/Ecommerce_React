import React from 'react';
import LogInForm from './LoginForm'; 

// Assuming LoginForm is in the same directory

function HeroSectionLogIn () {
  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100-minus-header"> {/* Custom class for height */}
      {/* Left side: Image */}
      <div className="flex-fill bg-info-subtle d-flex justify-content-center align-items-center p-4 p-lg-0">
        <img
          src="https://placehold.co/800x600/E0F2F7/4A90E2?text=Shopping+Essentials" // Placeholder image for demonstration
          alt="Shopping essentials: a smartphone, shopping cart, and bags"
          className="img-fluid rounded shadow object-fit-contain"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/E0F2F7/4A90E2?text=Image+Not+Found"; }}
        />
      </div>
      {/* Right side: Login Form */}
      <div className="flex-fill d-flex justify-content-center align-items-center p-4 bg-white">

        < LogInForm />
      </div>
    </div>
  );
};

export default HeroSectionLogIn;