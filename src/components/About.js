// About.js
import React from 'react';
import Footer from './Footer';
import Homeabout from './Aboutcomponents/Homeabout';
import Storyabout from './Aboutcomponents/Storyabout';
import Family from './Aboutcomponents/Family';
import Staffgallery from './Aboutcomponents/Staffgallery';


const About = () => {
  return (
    <div>
    
      <Homeabout />
      <Storyabout />
      <Family />
      <Staffgallery />


      <Footer />
    </div>
  );
}

export default About;
