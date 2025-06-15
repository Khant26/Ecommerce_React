import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Ensure this path is correct based on your project structure

function NavBar () {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-4">
      <div className="container-fluid">
        <button className="navbar-brand fs-4 fw-bold text-dark btn btn-link" type="button">Exclusive</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto me-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium hover-underline-red" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium hover-underline-red" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium hover-underline-red" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium text-decoration-underline-red" href="#">Sign Up</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="input-group">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="form-control form-control-sm bg-light rounded-start ps-3 border-0"
              />
              <button className="btn btn-sm bg-light text-secondary rounded-end" type="button">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;