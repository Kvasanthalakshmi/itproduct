import React from 'react';
import './AboutUs.css';
import aboutImage from '../Assets/About1.jpg'; // Adjust path as needed
import About from '../About/About';
import Customer from '../Customer/Customer';
import Abslider from '../Abslider/Abslider';
function AboutUs() {
  return (
    <>
    <div>
      {/* Image section */}
      <div className="image-container">
        <img 
          src={aboutImage} 
          alt="About Us" 
          
          style={{width:"100%", height:"50%", display: 'flex', justifyContent: "center", marginTop:'20px'}}
           
           
        />
      </div>
       
    </div>
    <Customer/>
     <About/>
   <Abslider/>
   
    </>
  );
}

export default AboutUs;
