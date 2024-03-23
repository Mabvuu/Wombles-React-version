import React from 'react';
import './contact.css';

const Location = () => {
  return (
    <section className="location">
      <div className="container">
        <div className="textloc">
          <h3>our location</h3>
          <h2>Where to find us</h2>
          <p>If you're trying to reach Khaya Nyama, we are always here to assist you with any questions
            or concerns you may have. Whether you are looking to make a reservation, plan an event or simply want to share
            your thoughts on your recent dining experience, we are here to help</p>
          <br />
          <p>To get in touch with us simply fill the form on this or the home page with your contact information
            and a brief description of your enquiry. A member of our team will get back to you as soon as possible.</p>
        </div>
        <div className="imageloc">
        <img src="img1/17.jpg" alt="" /> 
        </div>
      </div>
    </section>
  );
}

export default Location;
