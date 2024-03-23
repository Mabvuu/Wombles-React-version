import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="logo2" id="logo2">
            <img src="img1/logo.jpg" alt="" />
            <p><a href="https://www.facebook.com/wombleszimbabwe/"><i className="fab fa-facebook"></i> &ensp; KHAYA NYAMA WOMBLES</a></p>
            <p><a href="https://www.instagram.com/wombles_zimbabwe/?hl=en"><i className="fab fa-instagram"></i>&ensp; wombles_zimbabwe</a></p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="socials" id="socials">
            <p>Wombles is a beautiful and sophisticated restaurant that offers a unique dining experience centered around a warm welcoming community atmosphere</p>
            <br />
            <p>Connect with us on our social platforms</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="add" id="add">
            <h1>Address</h1>
            <p><i className="fas fa-location-dot"></i> 158 Enterprise road, Highlands, Harare, Zimbabwe</p>
            <p><i className="fas fa-phone"></i> (024) 2497768</p>
            <p><i className="fas fa-phone"></i> 0772 336 224</p>
            <p><i className="far fa-envelope"></i> bookings@khayanyama.com</p>
          </div>
        </div>
      </div>
      <p className="copyright-text">copyright &copy; 2024 Websites by Patty</p>
    </footer>
  );
}

export default Footer;
