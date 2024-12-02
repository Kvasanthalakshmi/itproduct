import React from 'react';
import './Customer.css';
import customer1 from '../Assets/customer1.jpg'; // Replace with the actual paths
import customer2 from '../Assets/customer2.jpg';
import customer3 from '../Assets/customer3.jpg';

function CustomerPage() {
  return (
    <div className="customer-page">
      <h2 className="customer-heading">What makes us different</h2>
      <p className="customer-description">
        HIFI IT PARK offering great deals on the best range of Laptops, Desktops, CCTV Cameras, Printers, PCs, and Accessories. Visit our store for a hands-on experience of our product recommendations from PC experts and hassle-free purchase. We strive to offer you a safe shopping environment.
      </p>
      <div className="customer-features">
        <div className="feature-card">
          <img src={customer1} alt="Customer Service" className="feature-image" />
          <h3 className="feature-title">Customer Service</h3>
          <p className="feature-text">
            We are standing by to help you provide uninterrupted system productivity and a seamless end-user experience.
          </p>
        </div>
        <div className="feature-card">
          <img src={customer2} alt="Products" className="feature-image" />
          <h3 className="feature-title">Products</h3>
          <p className="feature-text">
            We give quality Products and Services, helping you manage all our products and support services in one place for our valuable customers.
          </p>
        </div>
        <div className="feature-card">
          <img src={customer3} alt="Distributed Areas" className="feature-image" />
          <h3 className="feature-title">Distributed Areas</h3>
          <p className="feature-text">
            We deliver products to our customers safely and on time, all over Tamil Nadu, with free delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
