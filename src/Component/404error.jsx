export default function NotFoundPage() {
  return (
    <div className="bg-white font-sans text-gray-900 antialiased ">
      <div className="flex min-h-screen flex-col items-center justify-center">
        
        {/* Main content container */}
        <div className="w-full max-w-lg px-4  text-center">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 text-left" >
            <p className="text-sm text-gray-500  float-left" >
                
              <a href="#" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
              <span>404 Error</span>
            </p>
          </div>

          {/* Main Error Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 tracking-tight">
            404 Not Found
          </h1>

          {/* Subtitle Message */}
          <p className="text-lg text-gray-600 mb-8 text-center" >
            Your visited page not found. You may go home page.
          </p>
 
          {/* Back to Home Button */}
            
            
                <a href="https://example.com" class="btn btn-danger d-flex justify-content-center align-items-center" role="button">Back to home page</a>
        </div>
      </div>
    </div>
  );
}

// Export the NotFoundPage component

