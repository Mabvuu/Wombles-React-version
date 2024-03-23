import React from 'react';
import '../Aboutcomponents/about.css';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery">
        <div className="gallery-item gallery-item-left">
          <img src="img1/10.jpg" alt="" />
        </div>
        <div className="gallery-item gallery-item-right">
          <img src="img1/28.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <img src="img1/8.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <img src="img1/27.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
