import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faClock, faCalendarAlt, faPercent, faGift } from '@fortawesome/free-solid-svg-icons';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'باقة العروس الكاملة',
      description: 'باقة متكاملة تشمل جميع خدمات التجميل للعروس: مكياج، تصفيف شعر، عناية بالبشرة، مانيكير وباديكير.',
      originalPrice: 1500,
      discountPrice: 1000,
      discountPercent: 33,
      validUntil: '2025-12-31',
      image: require('../assets/images/emma.jpg'),
      badge: 'عرض خاص',
      features: ['مكياج احترافي', 'تصفيف شعر', 'عناية بالبشرة', 'مانيكير وباديكير']
    },
    {
      id: 2,
      title: 'خصم 30% على خدمات الشعر',
      description: 'استمتعي بخصم 30% على جميع خدمات الشعر: قص، صبغ، تصفيف، وعلاجات الشعر المختلفة.',
      originalPrice: 300,
      discountPrice: 210,
      discountPercent: 30,
      validUntil: '2025-08-15',
      image: require('../assets/images/hair.png'),
      badge: 'خصم 30%',
      features: ['قص الشعر', 'صبغ الشعر', 'تصفيف الشعر', 'علاجات الشعر']
    },
    {
      id: 3,
      title: 'باقة العناية بالبشرة',
      description: 'جلسة تنظيف عميق للبشرة مع ماسك مغذي وجلسة تدليك للوجه.',
      originalPrice: 400,
      discountPrice: 280,
      discountPercent: 30,
      validUntil: '2025-09-30',
      image: require('../assets/images/skin.jpg'),
      badge: 'الأكثر طلباً',
      features: ['تنظيف عميق', 'ماسك مغذي', 'تدليك الوجه', 'ترطيب البشرة']
    },
    {
      id: 4,
      title: 'عرض المانيكير والباديكير',
      description: 'جلسة مانيكير وباديكير كاملة مع تلميع وتزيين الأظافر بأحدث الألوان.',
      originalPrice: 150,
      discountPrice: 99,
      discountPercent: 34,
      validUntil: '2025-07-31',
      image: require('../assets/images/nails.jpg'),
      badge: 'عرض محدود',
      features: ['مانيكير كامل', 'باديكير كامل', 'تلميع الأظافر', 'تزيين احترافي']
    }
  ];

  return (
    <div className="offers-page">
      {/* Hero Section */}
      <section className="offers-hero bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-h-screen">
            <div className="col-lg-6">
              <div className="hero-content animate-fade-in">
                <h1 className="display-4 fw-bold mb-4">
                  <FontAwesomeIcon icon={faGift} className="me-3" />
                  عروضنا الخاصة
                </h1>
                <p className="lead mb-4">
                  اكتشفي أفضل العروض والخصومات الحصرية على جميع خدمات التجميل في صالون رؤوك
                </p>
                <div className="hero-stats d-flex gap-4 mb-4">
                  <div className="stat-item text-center">
                    <div className="stat-number h3 fw-bold">50%</div>
                    <div className="stat-label">خصم يصل إلى</div>
                  </div>
                  <div className="stat-item text-center">
                    <div className="stat-number h3 fw-bold">4</div>
                    <div className="stat-label">عروض متاحة</div>
                  </div>
                  <div className="stat-item text-center">
                    <div className="stat-number h3 fw-bold">100+</div>
                    <div className="stat-label">عميلة استفادت</div>
                  </div>
                </div>
                <Link to="/booking" className="btn btn-secondary btn-lg rounded-pill">
                  احجزي الآن واستفيدي
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image animate-scale-in">
                <img 
                  src={require('../assets/images/emma.jpg')} 
                  alt="عروض صالون رؤوك" 
                  className="img-fluid rounded-2xl shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="offers-grid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h1 fw-bold text-gradient mb-3">عروضنا الحصرية</h2>
            <p className="lead text-gray">اختاري العرض المناسب لك واستمتعي بأفضل خدمات التجميل</p>
          </div>
          
          <div className="cards-grid-2">
            {offers.map((offer, index) => (
              <div key={offer.id}>
                <div 
                  className="offer-card-enhanced animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="offer-badge">
                    <FontAwesomeIcon icon={faPercent} className="me-1" />
                    {offer.badge}
                  </div>
                  
                  <div 
                    className="offer-image"
                    style={{backgroundImage: `url(${offer.image})`}}
                  ></div>
                  
                  <div className="offer-content">
                    <h3 className="offer-title">{offer.title}</h3>
                    <p className="offer-description">{offer.description}</p>
                    
                    <div className="offer-features mb-4">
                      <h5 className="fw-bold mb-3 text-primary">
                        <FontAwesomeIcon icon={faTag} className="me-2" />
                        يشمل العرض:
                      </h5>
                      <ul className="list-unstyled">
                        {offer.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="fas fa-check-circle text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="offer-pricing">
                      <span className="original-price">{offer.originalPrice} ريال</span>
                      <span className="discount-price">{offer.discountPrice} ريال</span>
                      <span className="discount-badge bg-primary text-white px-2 py-1 rounded">
                        وفري {offer.discountPercent}%
                      </span>
                    </div>
                    
                    <div className="offer-validity">
                      <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
                      ساري حتى: {new Date(offer.validUntil).toLocaleDateString('ar-SA')}
                    </div>
                    
                    <Link 
                      to="/booking" 
                      className="btn btn-primary w-100 btn-lg rounded-pill mt-3"
                    >
                      احجزي هذا العرض
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="offers-cta bg-gradient-hero py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h1 fw-bold text-gradient mb-4">لا تفوتي الفرصة!</h2>
              <p className="lead mb-4">
                عروضنا محدودة الوقت. احجزي موعدك الآن واستمتعي بأفضل خدمات التجميل بأسعار مميزة
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/booking" className="btn btn-primary btn-lg rounded-pill">
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  احجزي موعدك
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg rounded-pill">
                  <FontAwesomeIcon icon={faTag} className="me-2" />
                  استفسري عن العروض
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;

