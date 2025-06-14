import React, { useState } from 'react';
function TopBar (){
  return (
    <div className="bg-dark text-white py-2 px-4 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center text-xs">
      <p className="text-center text-sm-left mb-1 mb-sm-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="text-white text-decoration-underline hover:text-decoration-none ms-1">ShopNow</a></p>
      <div className="dropdown">
        <select className="form-select form-select-sm bg-dark text-white border-0 py-1 pe-4" aria-label="Language selection">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
};


export default TopBar;