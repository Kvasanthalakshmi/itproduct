import React from 'react';
import './About.css';
import all from '../Assets/About2.jpg'; // Adjust path as needed

function AboutUs() {
  return (
    <div className="about-container">
      {/* Image on the left side */}
      <div className="about-image-container">
        

<div data-aos="fade-right">


        <img src={all} alt="Devices and Gadgets" className="about-image" />
      </div>
      </div>

      {/* Text on the right side */}
      <div className="about-text">
        <h2>Best Place To Buy Devices And Gadgets</h2>
        



        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">





        <p>
          The HIFI IT PARK is a leading destination for Networking Devices, Printers, Laptops, 
          Desktops, CCTV Cameras in Thoothukudi, offering some of the best prices and a completely 
          hassle-free experience with options of paying through Cash on Delivery, Debit Card, 
          Credit Card and Net Banking processed through secure and trusted gateways. Now shop for 
          your favorite Mobiles, Tablets & Gadgets.
        </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
