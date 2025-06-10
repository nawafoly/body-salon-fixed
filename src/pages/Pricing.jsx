import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCut, 
  faPalette, 
  faEye, 
  faHandSparkles, 
  faSparkles,
  faChevronDown,
  faChevronUp,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  const [expandedCategory, setExpandedCategory] = useState('hair');

  const pricingData = {
    hair: {
      title: 'قسم الشعر',
      icon: faCut,
      color: 'primary',
      services: [
        {
          category: 'الاستشوار',
          items: [
            { name: 'شعر قصير', price: '50' },
            { name: 'شعر وسط', price: '75' },
            { name: 'شعر طويل', price: '120' },
            { name: 'شعر طويل جداً', price: '150' }
          ]
        },
        {
          category: 'التساريح',
          items: [
            { name: 'شعر قصير', price: '120' },
            { name: 'شعر وسط', price: '160-180' },
            { name: 'شعر طويل جداً', price: '200-250' }
          ]
        },
        {
          category: 'القص',
          items: [
            { name: 'شعر قصير', price: '50' },
            { name: 'شعر طويل جداً ومدرج', price: '100' },
            { name: 'غرة', price: '25' },
            { name: 'أطراف', price: '30' }
          ]
        }
      ]
    },
    coloring: {
      title: 'قسم الصبغات والمعالجات',
      icon: faPalette,
      color: 'secondary',
      services: [
        {
          category: 'الصبغات',
          items: [
            { name: 'لون واحد - شعر قصير', price: '300' },
            { name: 'لون واحد - شعر وسط', price: '400' },
            { name: 'لون واحد - شعر طويل', price: '550' },
            { name: 'سحب لون مع صبغة - شعر قصير', price: '550' },
            { name: 'سحب لون مع صبغة - متوسط', price: '650' },
            { name: 'سحب لون مع صبغة - طويل', price: '850' }
          ]
        },
        {
          category: 'الكافيار',
          items: [
            { name: 'شعر قصير', price: '300' },
            { name: 'شعر وسط', price: '400' },
            { name: 'شعر طويل', price: '400' }
          ]
        },
        {
          category: 'البروتين',
          items: [
            { name: 'شعر قصير', price: '450' },
            { name: 'شعر وسط', price: '600' },
            { name: 'شعر طويل', price: '700-800' },
            { name: 'شعر طويل جداً', price: '1000-1200' }
          ]
        },
        {
          category: 'الفلر',
          items: [
            { name: 'جلسة شعر قصير', price: '150' },
            { name: 'جلسة شعر متوسط', price: '200' },
            { name: 'جلسة شعر طويل', price: '250' }
          ]
        }
      ]
    },
    makeup: {
      title: 'قسم المكياج',
      icon: faEye,
      color: 'accent',
      services: [
        {
          category: 'خدمات المكياج',
          items: [
            { name: 'رسمة آيلاينر', price: '35' },
            { name: 'رسمة حواجب', price: '35' },
            { name: 'رسمة عيون ناعمة', price: '85' },
            { name: 'رسمة عيون سهرة', price: '109' },
            { name: 'مكياج ناعم', price: '150' },
            { name: 'مكياج سهرة', price: '185' },
            { name: 'تركيب رموش من العملية', price: '20' },
            { name: 'تركيب رموش من ملكات', price: '30' }
          ]
        }
      ]
    },
    nails: {
      title: 'قسم البديكير والمناكير',
      icon: faHandSparkles,
      color: 'info',
      services: [
        {
          category: 'خدمات الأظافر',
          items: [
            { name: 'بديكير ومناكير كامل (يد ورجل + الأدوات مجاناً)', price: '190' },
            { name: 'يدين فقط (الأدوات 15 ريال)', price: '79' },
            { name: 'قدمين فقط (الأدوات 15 ريال)', price: '90' }
          ]
        }
      ]
    },
    waxing: {
      title: 'قسم الخدمات (الشمع وإزالة الشعر)',
      icon: faSparkles,
      color: 'warning',
      services: [
        {
          category: 'خدمات إزالة الشعر',
          items: [
            { name: 'تشقير أو صبغة', price: '50' },
            { name: 'تشقير مع صبغة', price: '100' },
            { name: 'شمع وجه', price: '100' },
            { name: 'واكس يدين أو رجلين - نصف', price: '125' },
            { name: 'واكس يدين أو رجلين - كامل', price: '250' },
            { name: 'واكس ظهر أو بطن', price: '100' },
            { name: 'واكس جسم كامل (بدون البكيني أو الأندر آرم)', price: '200' }
          ]
        }
      ]
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="pricing-page py-5">
      <div className="container">
        {/* Header Section */}
        <div className="pricing-header text-center mb-5">
          <h1 className="pricing-title">قائمة الأسعار الرسمية</h1>
          <p className="pricing-subtitle">
            أسعار شفافة وواضحة لجميع خدماتنا المتميزة
          </p>
          <div className="pricing-features">
            <div className="feature-item">
              <FontAwesomeIcon icon={faStar} className="feature-icon" />
              <span>أسعار ثابتة</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faStar} className="feature-icon" />
              <span>جودة عالية</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faStar} className="feature-icon" />
              <span>خدمة احترافية</span>
            </div>
          </div>
        </div>

        {/* Pricing Categories */}
        <div className="pricing-categories">
          {Object.entries(pricingData).map(([key, category]) => (
            <div key={key} className="pricing-category-card">
              <div 
                className={`category-header ${category.color}`}
                onClick={() => toggleCategory(key)}
              >
                <div className="category-info">
                  <FontAwesomeIcon icon={category.icon} className="category-icon" />
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <FontAwesomeIcon 
                  icon={expandedCategory === key ? faChevronUp : faChevronDown} 
                  className="toggle-icon"
                />
              </div>

              {expandedCategory === key && (
                <div className="category-content">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-group">
                      <h4 className="service-group-title">{service.category}</h4>
                      <div className="service-items">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="service-item">
                            <div className="service-name">{item.name}</div>
                            <div className="service-price">{item.price} ريال</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="pricing-cta text-center mt-5">
          <h3 className="cta-title">جاهزة لحجز موعدك؟</h3>
          <p className="cta-subtitle">
            احجزي موعدك الآن واستمتعي بخدماتنا المتميزة
          </p>
          <div className="cta-buttons">
            <Link to="/booking" className="btn btn-primary btn-lg rounded-pill me-3">
              احجزي موعدك الآن
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg rounded-pill">
              تواصلي معنا
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="pricing-notes mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="note-card">
                <h4 className="note-title">ملاحظات مهمة</h4>
                <ul className="note-list">
                  <li>جميع الأسعار شاملة الضريبة</li>
                  <li>الأسعار قابلة للتغيير دون إشعار مسبق</li>
                  <li>يُرجى الحجز المسبق لضمان الموعد</li>
                  <li>إلغاء الموعد يجب أن يكون قبل 24 ساعة</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="note-card">
                <h4 className="note-title">عروض خاصة</h4>
                <ul className="note-list">
                  <li>خصم 10% للعميلات الجدد</li>
                  <li>باقات مخفضة للعرائس</li>
                  <li>عروض شهرية على خدمات مختارة</li>
                  <li>برنامج نقاط الولاء للعميلات المميزات</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

