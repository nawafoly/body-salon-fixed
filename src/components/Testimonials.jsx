import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'سارة الأحمد',
      rating: 5,
      text: 'تجربة رائعة في صالون بودي! الخدمة ممتازة والنتيجة أكثر من رائعة. سأعود بالتأكيد مرة أخرى.',
      image: require('../assets/images/ava.jpg')
    },
    {
      id: 2,
      name: 'نورة العتيبي',
      rating: 5,
      text: 'أفضل صالون تجميل زرته! الموظفات محترفات والمكان نظيف وراقي. أنصح به بشدة.',
      image: require('../assets/images/emma.jpg')
    },
    {
      id: 3,
      name: 'هند السعيد',
      rating: 4,
      text: 'خدمة ممتازة وأسعار معقولة. استمتعت بتجربة العناية بالبشرة وكانت النتائج مذهلة.',
      image: require('../assets/images/sophie.jpg')
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i < rating ? 'star-filled' : 'star-empty'} 
        />
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">آراء عميلاتنا</h2>
        
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-4 mb-4" key={testimonial.id}>
              <div className="testimonial-card fade-in">
                <div className="testimonial-quote">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-author-name">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

