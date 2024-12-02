import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import sliderImage from '../Assets/cctv3d.jpg';
import anotherImage from '../Assets/3dlkaptop.jpg';
import printer from '../Assets/pr.jpg';
import TrendingLaptops from '../TrendingLaptops/TrendingLaptops'; // Import the TrendingLaptops component
import Ass from '../Asse/Ass'; 
import Slider from '../Slider/Sliders';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS when the component mounts
  }, []);

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };  

  return (
    <>
      <Slider/>
      {/* Image and Explanation Section */}
      
      <section className="container my-5">
        <div className="row">
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
        
          ><div data-aos="fade-right">
            <img src={sliderImage} className="img-fluid rounded shadow" height="60px" width="60%" alt="Product" />
            </div> 
          </motion.div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>CCTV Camera</h1>
            <hr className="section-divider" />
            <p className="lead">Starting from ₹18,000</p>
            <p> 
              High-Quality Surveillance Camera
              Keep your premises secure with advanced CCTV technology.
              Reliable, clear footage for round-the-clock protection.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Laptop</h1>
            <hr className="section-divider" />
            <p className="lead">Starting from ₹20,999</p>
            <p>
              High-Performance Laptops for Every Need
              Discover cutting-edge laptops designed for work, gaming, and creativity.
              Power, style, and speed in one sleek package.
            </p>
          </div>
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
        
          ><div data-aos="fade-left">
            <img src={anotherImage} className="img-fluid rounded shadow" height="60px" width="60%" alt="New Product" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Printer Section */}
      <section className="container my-5">
        <div className="row">
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
           
          ><div data-aos="fade-right">
            <img src={printer} className="img-fluid rounded shadow" height="60px" width="60%" alt="Printer Product" />
            </div>
          </motion.div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Printer</h1>
            <hr className="section-divider" />
            <p className="lead">Starting from ₹5,666</p>
            <p>
              High-Resolution Color Printer
              Effortlessly print vibrant photos and professional documents.
              Precision, quality, and efficiency in every print.
            </p>
          </div>
        </div>
      </section>

      {/* Add TrendingLaptops Component */}
      <TrendingLaptops />
      <Ass/>
    </>
  );
}

export default App;
