import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);

  // استرجاع بيانات الحجز من localStorage
  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      // إذا لم تكن هناك بيانات، يتم التوجيه إلى صفحة الحجز
      navigate('/booking');
    }
    setLoading(false);
  }, [navigate]);

  // تحويل معرف الخدمة إلى اسم
  const getServiceName = (serviceId) => {
    const services = {
      'haircut': 'قص الشعر',
      'haircolor': 'صبغ الشعر',
      'facial': 'تنظيف البشرة',
      'manicure': 'مانيكير وباديكير',
      'makeup': 'مكياج',
      'massage': 'مساج'
    };
    return services[serviceId] || serviceId;
  };

  // تحويل معرف الموظفة إلى اسم
  const getStaffName = (staffId) => {
    const staff = {
      'sara': 'سارة',
      'nora': 'نورة',
      'hind': 'هند',
      'any': 'أي موظفة متاحة'
    };
    return staff[staffId] || staffId;
  };

  // تحديد سعر الخدمة
  const getServicePrice = (serviceId) => {
    const prices = {
      'haircut': 75,
      'haircolor': 150,
      'facial': 120,
      'manicure': 90,
      'makeup': 200,
      'massage': 180
    };
    return prices[serviceId] || 0;
  };

  const handleConfirm = () => {
    // يمكن هنا إضافة منطق لإرسال البيانات إلى الخادم
    navigate('/success');
  };

  const handleBack = () => {
    navigate('/booking');
  };

  const handleCancel = () => {
    localStorage.removeItem('bookingData');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="checkout-page py-5">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">جاري التحميل...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!bookingData) {
    return (
      <div className="checkout-page py-5">
        <div className="container">
          <div className="alert alert-warning" role="alert">
            لم يتم العثور على بيانات الحجز. يرجى العودة إلى صفحة الحجز.
          </div>
          <div className="text-center mt-4">
            <button 
              className="btn btn-primary rounded-pill px-4"
              onClick={() => navigate('/booking')}
            >
              العودة إلى صفحة الحجز
            </button>
          </div>
        </div>
      </div>
    );
  }

  const servicePrice = getServicePrice(bookingData.service);

  return (
    <div className="checkout-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="checkout-container">
              <h1 className="checkout-title text-center mb-4">تأكيد الحجز</h1>
              <p className="checkout-subtitle text-center mb-5">
                يرجى مراجعة تفاصيل الحجز قبل التأكيد
              </p>
              
              <div className="booking-summary">
                <div className="booking-summary-header">
                  <h3>ملخص الحجز</h3>
                </div>
                
                <div className="booking-summary-body">
                  <div className="booking-detail">
                    <span className="booking-detail-label">الاسم:</span>
                    <span className="booking-detail-value">{bookingData.name}</span>
                  </div>
                  
                  <div className="booking-detail">
                    <span className="booking-detail-label">رقم الهاتف:</span>
                    <span className="booking-detail-value">{bookingData.phone}</span>
                  </div>
                  
                  <div className="booking-detail">
                    <span className="booking-detail-label">الخدمة:</span>
                    <span className="booking-detail-value">{getServiceName(bookingData.service)}</span>
                  </div>
                  
                  <div className="booking-detail">
                    <span className="booking-detail-label">الموظفة:</span>
                    <span className="booking-detail-value">{getStaffName(bookingData.staff)}</span>
                  </div>
                  
                  <div className="booking-detail">
                    <span className="booking-detail-label">التاريخ:</span>
                    <span className="booking-detail-value">{bookingData.date}</span>
                  </div>
                  
                  <div className="booking-detail">
                    <span className="booking-detail-label">الوقت:</span>
                    <span className="booking-detail-value">{bookingData.time}</span>
                  </div>
                  
                  <div className="booking-detail total">
                    <span className="booking-detail-label">السعر:</span>
                    <span className="booking-detail-value">{servicePrice} ريال</span>
                  </div>
                </div>
              </div>
              
              <div className="checkout-actions mt-4">
                <button 
                  className="btn btn-outline-secondary rounded-pill px-4 me-3"
                  onClick={handleBack}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  رجوع
                </button>
                
                <button 
                  className="btn btn-danger rounded-pill px-4 me-3"
                  onClick={handleCancel}
                >
                  <FontAwesomeIcon icon={faTimes} className="me-2" />
                  إلغاء
                </button>
                
                <button 
                  className="btn btn-primary rounded-pill px-4"
                  onClick={handleConfirm}
                >
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  تأكيد الحجز
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

