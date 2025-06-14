import React from 'react';

function Footer () {
  return (
    <footer className="bg-dark text-white py-5 px-4 mt-5">
      <div className="container-fluid">
        <div className="row g-4">
          {/* Column 1: Exclusive */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="fs-4 fw-bold mb-3">Exclusive</h3>
            <p className="mb-2">Subscribe</p>
            <p className="mb-3 text-sm text-secondary">Get 10% off your first order</p>
            <div className="input-group mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control bg-dark text-white border-secondary rounded-start ps-3"
              />
              <button className="btn btn-dark text-white border-secondary rounded-end" type="button">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="col-12 col-md-6 col-lg-2">
            <h3 className="fs-5 fw-medium mb-3">Support</h3>
            <ul className="list-unstyled text-sm text-secondary">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-8888-9999</li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div className="col-12 col-md-6 col-lg-2">
            <h3 className="fs-5 fw-medium mb-3">Account</h3>
            <ul className="list-unstyled text-sm text-secondary">
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">My Account</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Login / Register</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Cart</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Wishlist</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Shop</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="col-12 col-md-6 col-lg-2">
            <h3 className="fs-5 fw-medium mb-3">Quick Link</h3>
            <ul className="list-unstyled text-sm text-secondary">
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Terms Of Use</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none hover:text-decoration-underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="fs-5 fw-medium mb-3">Download App</h3>
            <p className="text-sm text-secondary mb-3">Save $3 with App New User Only</p>
            <div className="d-flex align-items-center mb-3">
              <img src="https://placehold.co/100x100/000/FFF?text=QR" alt="QR Code" className="w-25 h-auto rounded me-3" />
              <div className="d-flex flex-column">
                <img src="https://placehold.co/120x40/000/FFF?text=Google+Play" alt="Google Play" className="mb-2" style={{ height: '40px', width: 'auto' }} />
                <img src="https://placehold.co/120x40/000/FFF?text=App+Store" alt="App Store" style={{ height: '40px', width: 'auto' }} />
              </div>
            </div>
            <div className="d-flex gap-3">
              {/* Social media icons - using placeholders for now */}
              <a href="#" className="text-secondary hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-secondary hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.457 4.707a.75.75 0 011.086 0L20 11.25V19.5c0 .276-.224.5-.5.5h-15c-.276 0-.5-.224-.5-.5v-8.25L12.457 4.707zm-1.06 7.498a.75.75 0 101.06 1.06l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-secondary hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.204 14.504l-3.324-3.324 1.414-1.414 1.91 1.91 3.91-3.91 1.414 1.414-5.324 5.324z" /></svg>
              </a>
              <a href="#" className="text-secondary hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-6 19h-2v-6H8V8h3V5c0-2.24 1.63-3.5 4-3.5h3v4h-2c-1.33 0-1.5 1-1.5 2v1.5h3.5l-.5 4h-3V19z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary-subtle mt-4 pt-4 text-center text-secondary text-sm">
          <p>&copy; Copyright Rimel 2022. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer