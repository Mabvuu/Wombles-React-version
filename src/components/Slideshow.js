import React, { useState, useEffect } from 'react';
import './slideshow.css'; 

const Slideshow = () => {
 
  const images = [
    '/img1/1.jpg',
    '/img1/20.jpg',
    '/img1/22.jpg',
   
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

 
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    return () => clearInterval(intervalId); 
  }, [nextSlide]); 

  return (
    <div className="slideshow-container">
      {/* Render the current image */}
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      {/* Buttons for navigating between slides 
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
      <button className="next-btn" onClick={nextSlide}>&#10095;</button>*/}
    </div>
  );
};

export default Slideshow;
