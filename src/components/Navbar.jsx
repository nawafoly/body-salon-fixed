import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check login status
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      const role = localStorage.getItem('userRole');
      if (token) {
        setIsLoggedIn(true);
        setUserRole(role || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    checkLoginStatus();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole('');
    closeMenu();
    window.location.href = '/';
  };

  return (
    <header className={`navbar-wrapper py-3 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Link to="/" className="brand-link">
              <img 
                src={require('../assets/images/logo.png')} 
                alt="Body Salon Logo" 
                className="brand-logo"
              />
            </Link>
          </div>
          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg">
              <button 
                className="navbar-toggler ms-auto" 
                type="button" 
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                      to="/"
                      onClick={closeMenu}
                    >
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                      to="/about"
                      onClick={closeMenu}
                    >
                      عن المشغل
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
                      to="/services"
                      onClick={closeMenu}
                    >
                      الخدمات
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`} 
                      to="/pricing"
                      onClick={closeMenu}
                    >
                      الأسعار
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/offers' ? 'active' : ''}`} 
                      to="/offers"
                      onClick={closeMenu}
                    >
                      العروض
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`} 
                      to="/reviews"
                      onClick={closeMenu}
                    >
                      التقييمات
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                      to="/contact"
                      onClick={closeMenu}
                    >
                      التواصل
                    </Link>
                  </li>
                  
                  {/* أزرار تسجيل الدخول والخروج */}
                  {!isLoggedIn ? (
                    <li className="nav-item">
                      <Link 
                        className="btn btn-outline rounded-pill login-btn me-2" 
                        to="/login"
                        onClick={closeMenu}
                      >
                        <FontAwesomeIcon icon={faUser} className="me-1" />
                        تسجيل الدخول
                      </Link>
                    </li>
                  ) : (
                    <>
                      {userRole === 'admin' && (
                        <li className="nav-item">
                          <Link 
                            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} 
                            to="/dashboard"
                            onClick={closeMenu}
                          >
                            لوحة التحكم
                          </Link>
                        </li>
                      )}
                      <li className="nav-item">
                        <button 
                          className="btn btn-outline rounded-pill logout-btn me-2" 
                          onClick={handleLogout}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
                          تسجيل الخروج
                        </button>
                      </li>
                    </>
                  )}
                  
                  <li className="nav-item">
                    <Link 
                      className="btn btn-primary rounded-pill book-btn" 
                      to="/booking"
                      onClick={closeMenu}
                    >
                      احجزي الآن
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

