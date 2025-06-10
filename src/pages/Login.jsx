import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // محاكاة عملية تسجيل الدخول
    setTimeout(() => {
      // فحص بيانات المدير
      if (formData.email === 'admin@body-salon.com' && formData.password === 'admin123') {
        localStorage.setItem('authToken', 'admin-token-123');
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('userName', 'مديرة الصالون');
        alert('مرحباً بك مديرة الصالون!');
        navigate('/dashboard');
      } 
      // فحص بيانات الموظفة
      else if (formData.email === 'staff@body-salon.com' && formData.password === 'staff123') {
        localStorage.setItem('authToken', 'staff-token-456');
        localStorage.setItem('userRole', 'staff');
        localStorage.setItem('userName', 'موظفة الاستقبال');
        alert('مرحباً بك في نظام الصالون!');
        navigate('/dashboard');
      }
      // فحص بيانات العميلة
      else if (formData.email === 'client@example.com' && formData.password === 'client123') {
        localStorage.setItem('authToken', 'client-token-789');
        localStorage.setItem('userRole', 'client');
        localStorage.setItem('userName', 'عميلة مميزة');
        alert('مرحباً بك عزيزتي العميلة!');
        navigate('/');
      }
      else {
        alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
      setIsLoading(false);
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <img 
                src={require('../assets/images/logo.png')} 
                alt="Body Salon Logo" 
                className="login-logo-img"
              />
            </div>
            <h1 className="login-title">تسجيل الدخول</h1>
            <p className="login-subtitle">
              أهلاً بك في صالون بودي للتجميل
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FontAwesomeIcon icon={faEnvelope} className="label-icon" />
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control-login"
                placeholder="أدخلي بريدك الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <FontAwesomeIcon icon={faLock} className="label-icon" />
                كلمة المرور
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="form-control-login"
                  placeholder="أدخلي كلمة المرور"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                تذكريني
              </label>
              
              <Link to="/forgot-password" className="forgot-password-link">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin me-2"></i>
                  جاري تسجيل الدخول...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  تسجيل الدخول
                </>
              )}
            </button>
          </form>

          <div className="login-demo">
            <h4 className="demo-title">بيانات تجريبية للاختبار:</h4>
            <div className="demo-accounts">
              <div className="demo-account">
                <strong>المديرة:</strong>
                <br />
                البريد: admin@body-salon.com
                <br />
                كلمة المرور: admin123
              </div>
              <div className="demo-account">
                <strong>الموظفة:</strong>
                <br />
                البريد: staff@body-salon.com
                <br />
                كلمة المرور: staff123
              </div>
              <div className="demo-account">
                <strong>العميلة:</strong>
                <br />
                البريد: client@example.com
                <br />
                كلمة المرور: client123
              </div>
            </div>
          </div>

          <div className="login-footer">
            <p>
              ليس لديك حساب؟ 
              <Link to="/contact" className="register-link"> تواصلي معنا</Link>
            </p>
            <Link to="/" className="back-home-link">
              <i className="fas fa-arrow-right me-2"></i>
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

