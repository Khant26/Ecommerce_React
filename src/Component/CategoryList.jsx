import React, { useState } from 'react';

export function CategoryList() {
  const [activeCategory, setActiveCategory] = useState(null); // Track the active category

  const categories = [
    { icon: '📱', label: 'Phones' },
    { icon: '🖥️', label: 'Computers' },
    { icon: '⌚', label: 'SmartWatch' },
    { icon: '📷', label: 'Camera' },
    { icon: '🎧', label: 'HeadPhones' },
    { icon: '🎮', label: 'Gaming' },
  ];

  return (
    <div className="mb-5">
      <h6 className="text-danger">Categories</h6>
      <h3>Browse By Category</h3>
      <div className="row g-3">
        {categories.map((cat, idx) => (
          <div
            className="col-6 col-md-4 col-lg-2"
            key={idx}
            onMouseEnter={() => setActiveCategory(idx)} // Set active category on hover
            onMouseLeave={() => setActiveCategory(null)} // Reset active category on hover out
          >
            <div
              className={`border rounded text-center py-3 px-4 ${
                activeCategory === idx ? 'bg-danger text-white' : ''
              }`}
              style={{ width: '100%' }}
            >
              <div style={{ fontSize: '2rem' }}>{cat.icon}</div>
              <div>{cat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;