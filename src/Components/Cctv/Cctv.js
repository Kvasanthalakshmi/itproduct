import React, { useState } from 'react';
import './Cctv.css';
import { Button, Pagination } from '@mui/material';

// Corrected relative paths to go up one level to access Assets

import camera1 from '../Assets/camera1.jpg';
import camera2 from '../Assets/camera2.jpg';

const CctvPage = () => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // Number of products to display per page

  const products = [
    { id: 1, name: 'CCTV HIKVISION CCTV CAMERA DS-2DE4425IW', price: 43619, image: camera1 },
    { id: 2, name: 'Hikvision DS-2CE76D0T-ITPFS 2MP Dome Camera', price: 1600, image: camera2 },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="page-container">
      <h1 className="title">CCTV Camera</h1>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{formatCurrency(product.price)}</p>
            <div className="button-group">
              <Button variant="contained" color="primary" className="learn-more-button">
                Learn more
              </Button>
              <Button variant="text" color="primary" className="buy-button">
                Buy &gt;
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          variant="outlined" 
          color="primary" 
        />
      </div>
    </div>
  );
};

export default CctvPage;
