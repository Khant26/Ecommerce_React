import React from 'react';
import SignUp from '../Pages/SignupPage';

// Main App component
const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4 font-sans">
      {/* Main container for the form */}
      <div className="bg-white rounded-lg shadow-xl flex flex-col w-full max-w-md overflow-hidden p-8 md:p-12">

        {/* Right section for the form (now full width) */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create an account</h2>
        <p className="text-gray-600 mb-6 text-center">Enter your details below</p>

        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text" 
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email or Phone Number Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Create Account Button */}
        <button
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300 shadow-md mb-4"
        >
          Create Account
        </button>

        {/* Sign up with Google Button */}
        <button
          className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-50 transition duration-300 shadow-md"
        >
          {/* Google Icon SVG */}
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M20.64 12.21c0-.68-.06-1.34-.17-1.98H12v3.75h4.67a4.57 4.57 0 0 1-1.98 2.96v2.44h3.15c1.84-1.7 2.9-4.22 2.9-7.22z"/>
            <path fill="#34A853" d="M12 21c3.24 0 5.95-1.07 7.93-2.92l-3.15-2.44c-.87.6-1.99.96-3.78.96-2.9 0-5.36-1.95-6.24-4.57H2.68v2.54A9 9 0 0 0 12 21z"/>
            <path fill="#FBBC04" d="M5.76 14.18c-.24-.6-.38-1.24-.38-1.92s.14-1.32.38-1.92V8.04H2.68a9 9 0 0 0 0 7.92L5.76 14.18z"/>
            <path fill="#EA4335" d="M12 4.04c1.78 0 3.33.61 4.57 1.79l2.76-2.65C17.9 1.17 15.24 0 12 0A9 9 0 0 0 2.68 4.04l3.08 2.36C6.64 4.89 9.1 2.94 12 2.94z"/>
          </svg>
          Sign up with Google
        </button>

        {/* Log in link */}
        <div className="text-center mt-6 text-gray-600">
          Already have account?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};



export default SignUpForm;