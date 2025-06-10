import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال النموذج إلى الخادم
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="home-contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">تواصلي معنا</h2>
        
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-image fade-in">
              <img src={require('../assets/images/salon.jpg')} alt="Contact" className="img-fluid" />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-form-container fade-in">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الاسم"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="البريد الإلكتروني"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="رسالتك"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary rounded-pill">
                  إرسال الرسالة
                </button>
              </form>
              
              <div className="contact-info mt-4">
                <div className="contact-info-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                  <span>123 شارع الجمال، حي الروضة، الرياض</span>
                </div>
                
                <div className="contact-info-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <span>+966 123 456 7890</span>
                </div>
                
                <div className="contact-info-item">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <span>info@bodysalon.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;

