import React from 'react';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  const services = [
    {
      id: 'hair-care',
      title: 'العناية بالشعر',
      icon: 'fas fa-cut',
      description: 'خدمات متكاملة للعناية بالشعر تشمل القص، الصبغ، التصفيف، والعلاجات المتخصصة.',
      startingPrice: '50'
    },
    {
      id: 'skin-care',
      title: 'العناية بالبشرة',
      icon: 'fas fa-spa',
      description: 'جلسات تنظيف وتقشير وترطيب للبشرة مع علاجات متخصصة للمشاكل المختلفة.',
      startingPrice: '100'
    },
    {
      id: 'nail-care',
      title: 'العناية بالأظافر',
      icon: 'fas fa-hand-sparkles',
      description: 'خدمات المانيكير والباديكير مع تقنيات متطورة وألوان عصرية.',
      startingPrice: '79'
    },
    {
      id: 'makeup',
      title: 'المكياج',
      icon: 'fas fa-palette',
      description: 'مكياج احترافي للمناسبات الخاصة والأعراس مع خيارات متنوعة تناسب جميع الأذواق.',
      startingPrice: '85'
    },
    {
      id: 'treatments',
      title: 'المعالجات المتخصصة',
      icon: 'fas fa-magic',
      description: 'علاجات متطورة للشعر والبشرة باستخدام أحدث التقنيات والمنتجات العالمية.',
      startingPrice: '300'
    },
    {
      id: 'bridal',
      title: 'باقات العروس',
      icon: 'fas fa-crown',
      description: 'باقات شاملة للعروس تشمل جميع خدمات التجميل لإطلالة مثالية في يومك المميز.',
      startingPrice: '1000'
    }
  ];

  return (
    <section className="home-services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">خدماتنا المميزة</h2>
          <p className="section-subtitle">
            نقدم لكِ مجموعة شاملة من خدمات التجميل والعناية بأعلى معايير الجودة
          </p>
        </div>
        
        <div className="cards-grid-3">
          {services.map((service, index) => (
            <div key={service.id}>
              <div 
                className="service-card-enhanced animate-fade-in" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="card-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div className="card-price">ابتداءً من {service.startingPrice} ريال</div>
                <Link to="/booking" className="btn btn-primary w-100 rounded-pill">احجزي الآن</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <Link to="/services" className="btn btn-outline btn-lg rounded-pill me-3">
            عرض جميع الخدمات
          </Link>
          <Link to="/offers" className="btn btn-secondary btn-lg rounded-pill">
            العروض الخاصة
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

