import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHome, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  // مسح بيانات الحجز من localStorage بعد الوصول إلى صفحة النجاح
  useEffect(() => {
    localStorage.removeItem('bookingData');
  }, []);

  return (
    <div className="success-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="success-container text-center">
              <div className="success-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              
              <h1 className="success-title mb-4">تم الحجز بنجاح!</h1>
              
              <p className="success-message mb-4">
                شكراً لك على الحجز في صالون بودي للتجميل. تم استلام طلبك وسيتم التواصل معك قريباً لتأكيد الموعد.
              </p>
              
              <div className="success-details mb-5">
                <p>
                  يرجى الوصول قبل 10 دقائق من موعدك المحدد.
                  <br />
                  في حالة الرغبة في إلغاء أو تغيير الموعد، يرجى الاتصال بنا قبل 24 ساعة على الأقل.
                </p>
              </div>
              
              <div className="success-actions">
                <Link to="/" className="btn btn-outline-secondary rounded-pill px-4 me-3">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  العودة للرئيسية
                </Link>
                
                <Link to="/booking" className="btn btn-primary rounded-pill px-4">
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  حجز موعد آخر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

