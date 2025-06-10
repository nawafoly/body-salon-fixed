import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="hero-content fade-in">
              <h1 className="hero-title mb-4">مرحباً بكِ في صالون بودي للتجميل</h1>
              <p className="hero-text mb-4">
                نقدم لكِ أفضل خدمات التجميل والعناية بالبشرة والشعر في مكان واحد.
                فريقنا من الخبراء يضمن لكِ تجربة فريدة وراقية.
              </p>
              <div className="hero-buttons">
                <Link to="/booking" className="btn btn-primary rounded-pill me-3">
                  احجزي الآن
                </Link>
                <Link to="/services" className="btn btn-outline-secondary rounded-pill">
                  استكشفي خدماتنا
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-container fade-in">
              <img 
                src={require('../assets/images/salon.jpg')} 
                alt="Body Beauty Salon" 
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

