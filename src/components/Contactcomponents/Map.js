import React from 'react';
import './contact.css';

const Map = () => {
  return (
    <section className="map-section">
      <div className="container">
        <h1>Here to guide you <i className="fa-solid fa-face-smile"></i></h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.958739134058!2d31.10287260998316!3d-17.793636183094286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb575d55895b%3A0x45cd322c15b6d4f4!2sKhaya%20Nyama%20Wombles!5e0!3m2!1sen!2szw!4v1689731981182!5m2!1sen!2szw" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}

export default Map;
