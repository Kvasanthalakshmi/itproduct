import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import ContactImage from '../Assets/Contactani.gif';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [responseMessage, setResponseMessage] = useState(""); 
  const [responseType, setResponseType] = useState(""); 

  useEffect(() => {
    // Retrieve any response message from localStorage on component mount
    const savedMessage = localStorage.getItem("responseMessage");
    const savedType = localStorage.getItem("responseType");

    if (savedMessage && savedType) {
      setResponseMessage(savedMessage);
      setResponseType(savedType);

      // Clear from localStorage to avoid showing it again on future reloads
      localStorage.removeItem("responseMessage");
      localStorage.removeItem("responseType");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost/itpark/Contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const successMessage = "Form submitted successfully!";
        setResponseMessage(successMessage);
        setResponseType("success");
        
        // Save message to localStorage
        localStorage.setItem("responseMessage", successMessage);
        localStorage.setItem("responseType", "success");

        setFormData({ name: "", email: "", message: "" });
        
        // Instead of reloading, you can choose to show the message for a while
        setTimeout(() => {
          setResponseMessage(""); // Clear message after a few seconds
        }, 5000); // 5 seconds
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      const errorMessage = "There was an error submitting the form. Please try again.";
      setResponseMessage(errorMessage);
      setResponseType("error");

      // Save error message to localStorage
      localStorage.setItem("responseMessage", errorMessage);
      localStorage.setItem("responseType", "error");

      // Instead of reloading, you can choose to show the message for a while
      setTimeout(() => {
        setResponseMessage(""); // Clear message after a few seconds
      }, 5000); // 5 seconds
    }
  };
  

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Let's Get In Touch</h2>
       
        <img
          src={ContactImage}
          alt="Contact Illustration"
          className="contact-image"
          width="350"
          height="250"
        />
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="contact-right">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {/* Conditionally render the response message */}
        {responseMessage && (
          <div className={`response-message ${responseType}`}>
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
