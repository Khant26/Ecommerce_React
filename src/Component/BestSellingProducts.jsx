import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Ensure this path is correct based on your project structure

export function BestSellingProducts() {
  const products = [
    { name: 'The north coat', price: 260, oldPrice: 360, stars: 5, img: 'Cart.png' },
    { name: 'Gucci duffle bag', price: 960, oldPrice: 1160, stars: 4, img: 'Cart.png' },
    { name: 'RGB liquid CPU Cooler', price: 160, oldPrice: 170, stars: 4, img: 'Cart.png' },
    { name: 'Small BookSelf', price: 360, stars: 5, img: 'Cart.png' },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 className="text-danger">This Month</h6>
          <h3>Best Selling Products</h3>
        </div>
        <button className="btn btn-danger">View All</button>
      </div>

      <div className="row g-3">
        {products.map((prod, idx) => (
          <div className="col-6 col-md-3" key={idx}>
            <div className="card h-100">
              <img src={prod.img} className="card-img-top" alt={prod.name} />
              <div className="card-body">
                <p className="mb-1">{prod.name}</p>
                <div>
                  <span className="text-danger">${prod.price}</span>{' '}
                  {prod.oldPrice && (
                    <small className="text-muted text-decoration-line-through">${prod.oldPrice}</small>
                  )}
                </div>
                <div className="text-warning">
                  {'★'.repeat(prod.stars)}{'☆'.repeat(5 - prod.stars)}
                  <small className="text-muted"> (65)</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellingProducts;