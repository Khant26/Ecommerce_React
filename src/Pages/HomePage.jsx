import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import CategoryList from '../Component/CategoryList';
import BestSellingProducts from '../Component/BestSellingProducts';
import TopBar from '../Component/TopBar';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';


export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

        const productGroups = [
      [
        ['HAVIT HV-G92 Gamepad', 150, 120, '⭐⭐⭐⭐☆', '/Frame50.png'],
        ['AK-900 Wired Keyboard', 700, 560, '⭐⭐⭐⭐⭐', '/Frame50.png'],
        ['IPS LCD Gaming Monitor', 460, 370, '⭐⭐⭐⭐☆', '/Frame50.png'],
        ['S-Series Comfort Chair', 470, 375, '⭐⭐⭐⭐⭐', '/Frame50.png'],
        ['Noise Cancelling Headphones', 250, 200, '⭐⭐⭐⭐⭐', '/Frame50.png'],
        ['Smartwatch Series 6', 350, 280, '⭐⭐⭐⭐☆', '/Frame50.png'], // Added one more product to make it six
      ],
    ];

  return (
    <>
      <TopBar />
      <NavBar />
      <div className="container my-4">
      
      {/* Categories + Hero */}
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group">
            <li className="list-group-item">Women's Fashion</li>
            <li className="list-group-item">Men's Fashion</li>
            <li className="list-group-item">Electronics</li>
            <li className="list-group-item">Home & Garden</li>
            <li className="list-group-item">Sports & Outdoors</li>
            <li className="list-group-item">Automotive</li>
            <li className="list-group-item">Health & Beauty</li>
          </ul>
        </div>
        <div className="col-md-9">
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/Frame560.png" className="d-block w-100" alt="Hero" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

            <div className="mt-5">
        {/* Top Section */}
        <div className="text-center float-start">
          <h4 className="fw-bold mb-3">Today's Flash Sales</h4>
                    <div
            className="d-flex justify-content-start mb-3"
            style={{ marginRight: '-60px' }} // Add 50px spacing to the right
          >
            {['days', 'hours', 'minutes', 'seconds'].map((key, index) => (
              <React.Fragment key={key}>
                <div className="mx-2 text-center">
                  <div className="text-muted small text-uppercase">{key}</div>
                  <div className="fw-bold fs-5">{timeLeft[key]}</div>
                </div>
                {index < 3 && <div className="fw-bold fs-5">:</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productGroups.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="container">
                <div className="row g-3 justify-content-center">
                  {group.map(([name, originalPrice, discountPrice, rating, image], idx) => (
                    <div className="col-6 col-md-4 col-lg-2" key={idx}>
                      <div className="card h-100">
                        <img src={image} className="card-img-top" alt={name} />
                        <div className="card-body text-center">
                          <p className="card-title small">{name}</p>
                          <p className="mb-1">
                            <span className="text-muted text-decoration-line-through">${originalPrice}</span>
                            <span className="fw-bold text-danger ms-2">${discountPrice}</span>
                          </p>
                          <div className="text-warning small">{rating}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* View All */}
      <div className="text-center mt-3">
        <button className="btn btn-danger">View All Products</button>
      </div>

      {/* Categories + Best Selling */}
      <CategoryList />
      <BestSellingProducts />
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <img
              src="/midimage.png" // Path to the image in the public folder
              alt="Flash Sales"
              style={{ width: 'auto', height: 'auto' }} // Set width and height to auto
            />
          </div>
      {/* Flash Sales */}
                                               <div className="mt-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="text-danger mb-0">This Month</h6>
                              <h4 className="fw-bold mb-0">Explore Our Products</h4>
                            </div>
                          </div>
                        </div>

      {/* Product Carousel */}
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productGroups.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="container">
                <div className="row g-3 justify-content-center">
                  {group.map(([name, originalPrice, discountPrice, rating, image], idx) => (
                    <div className="col-6 col-md-4 col-lg-2" key={idx}>
                      <div className="card h-100">
                        <img src={image} className="card-img-top" alt={name} />
                        <div className="card-body text-center">
                          <p className="card-title small">{name}</p>
                          <p className="mb-1">
                            <span className="text-muted text-decoration-line-through">${originalPrice}</span>
                            <span className="fw-bold text-danger ms-2">${discountPrice}</span>
                          </p>
                          <div className="text-warning small">{rating}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* View All */}
      <div className="text-center mt-3">
        <button className="btn btn-danger">View All Products</button>
      </div>
      </div>
      <Footer/>
    </>
  );
}
