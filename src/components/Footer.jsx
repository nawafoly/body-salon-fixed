import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img 
              src={require('../assets/images/logo.png')} 
              alt="Body Salon Logo" 
              className="footer-logo mb-3"
            />
            <p className="footer-text">
              نقدم لكِ أفضل خدمات التجميل والعناية بالبشرة والشعر في مكان واحد. فريقنا من الخبراء يضمن لكِ تجربة فريدة وراقية.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4 className="footer-heading">روابط سريعة</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about">عن المشغل</Link>
              </li>
              <li>
                <Link to="/services">الخدمات</Link>
              </li>
              <li>
                <Link to="/pricing">الأسعار</Link>
              </li>
              <li>
                <Link to="/offers">العروض</Link>
              </li>
              <li>
                <Link to="/contact">التواصل</Link>
              </li>
              <li>
                <Link to="/login" className="login-link">
                  <i className="fas fa-sign-in-alt me-2"></i>
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h4 className="footer-heading">معلومات التواصل</h4>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>123 شارع الجمال، حي الروضة، الرياض</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span>+966 123 456 7890</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>info@bodysalon.com</span>
              </li>
            </ul>
            
            <div className="footer-cta mt-4">
              <Link to="/booking" className="btn btn-primary btn-sm rounded-pill">
                احجزي موعدك الآن
              </Link>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright mb-0">
                © 2025 Body Beauty Salon. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <Link to="/privacy">سياسة الخصوصية</Link>
                <Link to="/terms">الشروط والأحكام</Link>
                <Link to="/login">تسجيل الدخول</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

