import React, { useState } from 'react';

// Assuming you have a CSS file for custom styles

function LogInForm  () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, you would handle login logic here
    console.log('Attempting to log in with:', { email, password });
    setShowModal(true); // Show custom modal instead of alert
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card shadow-sm p-4 p-md-5 w-100" style={{ maxWidth: '450px' }}>
      <h2 className="card-title fs-2 fw-semibold mb-2 text-dark">Log in to Exclusive</h2>
      <p className="card-subtitle text-secondary mb-4">Enter your details below</p>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="form-control py-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="form-control py-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="submit"
            className="btn btn-danger btn-lg fw-semibold shadow-sm px-5 py-3 rounded"
          >
            Log In
          </button>
          <a href="#" className="text-danger text-sm fw-medium text-decoration-underline hover:text-decoration-none">Forget Password?</a>
        </div>
      </form>

      {/* Custom Modal for Alert */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Attempt</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Login functionality is not implemented in this demo.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogInForm;