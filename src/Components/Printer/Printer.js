import React, { useState } from 'react';
import './Printer.css'; // Ensure this file is correctly linked
import { Button, Pagination } from '@mui/material';

// Corrected relative paths to go up one level to access Assets
import printer21 from '../Assets/printer21.webp';
import printer22 from '../Assets/printer22.jpg';

const PrinterPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // Number of products to display per page
  const products = [
    { id: 1, name: 'Canon E4570 All-in-One Wi-Fi Ink Efficient Colour Printer', price: 13499, image: printer21 },
    { id: 2, name: 'Canon E4570 All-in-One Wi-Fi Ink Efficient Colour Printer', price: 8349, image: printer22 },
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
      <h1 className="title">Printers</h1>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{formatCurrency(product.price)}</p>
            <div className="button-group">
              <Button 
                variant="contained" 
                color="primary" 
                className="learn-more-button">
                Learn more
              </Button>
              <Button 
                variant="text" 
                color="primary" 
                className="buy-button">
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

export default PrinterPage;
