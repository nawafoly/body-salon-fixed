import React from 'react';

const Gallery = () => {
  // استخدام الصور المتاحة في المشروع
  const galleryImages = [
    { id: 1, src: require('../assets/images/hair.png'), alt: 'Hair Styling' },
    { id: 2, src: require('../assets/images/skin.jpg'), alt: 'Skin Care' },
    { id: 3, src: require('../assets/images/nails.jpg'), alt: 'Nail Care' },
    { id: 4, src: require('../assets/images/ava.jpg'), alt: 'Beauty Treatment' },
    { id: 5, src: require('../assets/images/emma.jpg'), alt: 'Makeup' },
    { id: 6, src: require('../assets/images/sophie.jpg'), alt: 'Hair Coloring' }
  ];

  return (
    <section className="gallery-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">معرض الصور</h2>
        
        <div className="row">
          {galleryImages.map((image) => (
            <div className="col-md-4 col-sm-6 mb-4" key={image.id}>
              <div className="gallery-item fade-in">
                <img src={image.src} alt={image.alt} className="img-fluid" />
                <div className="gallery-overlay">
                  <div className="gallery-caption">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

