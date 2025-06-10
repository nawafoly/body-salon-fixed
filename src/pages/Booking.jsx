import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faPhone, faCut, faUserFriends, faClock } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    staff: '',
    date: '',
    time: ''
  });

  const services = [
    { id: 'haircut', name: 'قص الشعر' },
    { id: 'haircolor', name: 'صبغ الشعر' },
    { id: 'facial', name: 'تنظيف البشرة' },
    { id: 'manicure', name: 'مانيكير وباديكير' },
    { id: 'makeup', name: 'مكياج' },
    { id: 'massage', name: 'مساج' }
  ];

  const staff = [
    { id: 'sara', name: 'سارة' },
    { id: 'nora', name: 'نورة' },
    { id: 'hind', name: 'هند' },
    { id: 'any', name: 'أي موظفة متاحة' }
  ];

  const timeSlots = [
    '10:00 صباحاً',
    '11:00 صباحاً',
    '12:00 ظهراً',
    '1:00 مساءً',
    '2:00 مساءً',
    '3:00 مساءً',
    '4:00 مساءً',
    '5:00 مساءً',
    '6:00 مساءً',
    '7:00 مساءً',
    '8:00 مساءً'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // حفظ بيانات الحجز في localStorage للاستخدام في صفحة الدفع
    localStorage.setItem('bookingData', JSON.stringify(formData));
    // الانتقال إلى صفحة الدفع
    navigate('/checkout');
  };

  // تحديد الحد الأدنى للتاريخ (اليوم)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="booking-container">
              <h1 className="booking-title text-center mb-4">احجزي موعدك الآن</h1>
              <p className="booking-subtitle text-center mb-5">
                املئي النموذج التالي لحجز موعد في صالون بودي للتجميل
              </p>
              
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        الاسم
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخلي اسمك الكامل"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05xxxxxxxx"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="service" className="form-label">
                        <FontAwesomeIcon icon={faCut} className="me-2" />
                        الخدمة
                      </label>
                      <select
                        className="form-select"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>اختاري الخدمة</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="staff" className="form-label">
                        <FontAwesomeIcon icon={faUserFriends} className="me-2" />
                        الموظفة
                      </label>
                      <select
                        className="form-select"
                        id="staff"
                        name="staff"
                        value={formData.staff}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>اختاري الموظفة</option>
                        {staff.map(person => (
                          <option key={person.id} value={person.id}>
                            {person.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="date" className="form-label">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                        التاريخ
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="time" className="form-label">
                        <FontAwesomeIcon icon={faClock} className="me-2" />
                        الوقت
                      </label>
                      <select
                        className="form-select"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>اختاري الوقت</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5">
                    التالي
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

