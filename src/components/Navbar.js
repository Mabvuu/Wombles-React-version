import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom'; 
import './Navbar.css';
import {AiOutlineClose} from "react-icons/ai";
import { AiOutlineMenuUnfold } from 'react-icons/ai';





const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }
 
  return (
    <>
        <header className="header text-white py-4">
        <div className="address">
          <p><i className="fa-solid fa-location-dot"></i> 158 Enterprise road, Highlands, {' '} Harare, Zimbabwe</p>
        </div>
        <div className="number">
          <p><i className="fa-solid fa-phone"></i> (024) 2497768</p>
          <p><i className="fa-solid fa-phone"></i> 0772 336 224</p>
        </div>
        <div className="email">
          <p><i className="fa-regular fa-envelope"></i> bookings@khayanyama.com</p>
        </div>
      </header>
      <div className="logo">
      <img src="img1/logo.jpg" alt="" />
      </div>


      {/*NAVBAR */}
        <nav className=" navbar  flex justify-center items-center p-4">
      <div className={`flex justify-center items-center space-x-4 ${!menu ? "hidden md:flex" : ""}`}>

    <ScrollLink to="home" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">Home</ScrollLink>
    <ScrollLink to="about" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">About</ScrollLink>
    <div className="relative group">
      <ScrollLink to="menu" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">Menu</ScrollLink>
     
      <ul className="absolute hidden bg-white border border-gray-400 rounded-lg p-4 group-hover:block cursor-pointer ">
        <li><RouterLink to="/menu/mains" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Mains</RouterLink></li>
        <li><RouterLink to="/menu/salads" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Salads</RouterLink></li>
        <li><RouterLink to="starters" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Starters</RouterLink></li>
        <li><RouterLink to="desserts" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Desserts</RouterLink></li>
        <li><RouterLink to="cocktails" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Cocktails</RouterLink></li>
        <li><RouterLink to="wine" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Wine</RouterLink></li>
        <li><RouterLink to="barmenu" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Bar Menu</RouterLink></li>
      </ul> 
    </div>
    <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">Contact</ScrollLink>

    
   
 
  </div>
  
  <div className="md:hidden flex items-center justify-between space-x-4">
  <a href="link_to_facebook" className="text-white hover:text-gray-300">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="link_to_twitter" className="text-white hover:text-gray-300">
    <i className="fab fa-instagram"></i>
  </a>
  <div className="flex items-center flex-grow">
    {menu ? 
      (<AiOutlineClose size={25} onClick={handleChange} className="text-white z-20 absolute top-13 right-0 mr-4 mt-4 border border-white rounded-full p-1" />) :
      (<AiOutlineMenuUnfold size={25} onClick={handleChange} className="text-white" />)
    }
  </div>
</div>




  
</nav>

<div className={`menu ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute text-white left-0 top-[4.4rem] font-semibold text-2xl text-center pt-8 w-full h-fit transition-transform duration-300 border-t border-white z-10`}>
 



<ScrollLink to="home" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">Home</ScrollLink>
    <ScrollLink to="about" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">About</ScrollLink>
    <div className="relative group">
      <ScrollLink to="menu" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">Menu</ScrollLink>
     
      <ul className="absolute hidden bg-white border border-gray-400 rounded-lg p-4 group-hover:block cursor-pointer w-48">
        <li><RouterLink to="/menu/mains" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Mains</RouterLink></li>
        <li><RouterLink to="salads" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Salads</RouterLink></li>
        <li><RouterLink to="starters" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Starters</RouterLink></li>
        <li><RouterLink to="desserts" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Desserts</RouterLink></li>
        <li><RouterLink to="cocktails" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Cocktails</RouterLink></li>
        <li><RouterLink to="wine" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Wine</RouterLink></li>
        <li><RouterLink to="barmenu" spy={true} smooth={true} duration={500} className="text-black hover:underline cursor-pointer">Bar Menu</RouterLink></li>
      </ul> 
    </div>
    <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer">Contact</ScrollLink>
    
    <div className="logo">
        <ScrollLink to="/"><img src="img1/logo.jpg" alt="" /></ScrollLink>
      </div>

</div>
  


    </>
  );
};

export default Navbar;
