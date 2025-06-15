import React from 'react'
import TopBar from '../Component/TopBar.jsx';
import NavBar from '../Component/NavBar.jsx';
import Footer from '../Component/Footer.jsx';
import '../index.css'; // Importing the CSS file for global styles
import NotFoundPage from '../Component/404error.jsx';

function ErrorPage() {
  return (
    <div>
        <TopBar />
        <NavBar />
        <NotFoundPage />
        < Footer />

    </div>
  )
}

export default ErrorPage