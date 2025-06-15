import React from 'react'
import TopBar from '../Component/TopBar.jsx';
import NavBar from '../Component/NavBar.jsx';
import Footer from '../Component/Footer.jsx';
import '../index.css'; // Importing the CSS file for global styles
import NotFoundPage from '../Component/404error.jsx';

function ErrorPage() {
  return (
    <div className="min-h-screen bg-light font-sans antialiased text-dark">
      {/* Bootstrap CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <TopBar />
        <NavBar />
        <NotFoundPage />
        < Footer />

    </div>
  )
}

export default ErrorPage