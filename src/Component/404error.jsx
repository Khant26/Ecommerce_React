export default function NotFoundPage() {
  return (
    <div className="bg-white text-dark">
                            <div className="d-flex flex-column justify-content-center align-items-center" >
                      {/* Main content container */}
                      <div className="w-100" style={{ maxWidth: '600px' }}>
                        {/* Breadcrumb Navigation */}
                                <div className="position-absolute" style={{ left: '0', marginBottom: '150px', marginLeft: '20px' }}>
                  <p className="text-muted small">
                    <a href="#" className="text-decoration-none text-danger">Home</a>
                    <span className="mx-2">/</span>
                    <span>404 Error</span>
                  </p>
                </div>
                    
                        {/* Main Error Heading */}
                        <div className="text-center mb-6" style={{ marginBottom: '100px',marginTop: '100px'  }}> {/* Increased margin-bottom */}
                          <h1 className="display-1 fw-bold mb-3">
                            404 Not Found
                          </h1>
                    
                          {/* Subtitle Message */}
                          <p className="lead text-muted mb-4">
                            The page you are looking for does not exist. You may return to the home page.
                          </p>
                        </div>
                    
                        {/* Back to Home Button */}
                        <div className="d-flex justify-content-center mt-5" style={{ marginTop: '150px' }}> {/* Increased margin-top */}
                          <a
                            href="https://example.com"
                            className="btn btn-danger btn-lg w-100"
                            role="button"
                          >
                            Back to Home Page
                          </a>
                        </div>
                      </div>
                    </div>
      </div>
    
  );
}