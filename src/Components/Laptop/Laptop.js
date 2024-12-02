import React, { useState } from 'react';
import './Laptop.css';
import { Button, Pagination } from '@mui/material';

import laptop11 from '../Assets/Laptop11.jpg';
import laptop12 from '../Assets/Laptop12.jpg';
import laptop13 from '../Assets/Laptop13.jpg';
import laptop14 from '../Assets/Laptop14.jpg';
import laptop15 from '../Assets/Laptop15.jpg';
import laptop16 from '../Assets/Laptop16.jpg';

const LaptopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const products = [
    { id: 1, name: 'HP 247 G8 Laptop (AMD Athlon P-3045B HD/ 14 inches(35.5cm)', price: 28750, image: laptop11 },
    { id: 2, name: 'DELL Latitude 5490 Core i5 8th Gen Laptop', price: 27849, image: laptop12 },
    { id: 3, name: 'Acer Aspire 3 Laptop AMD 3020e Dual-Core Processor', price: 24990, image: laptop13 },
    { id: 4, name: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor', price: 34990, image: laptop14 },
    { id: 5, name: 'Lenovo V15 G2 Laptop with AMD ryzen 3 5300u', price: 28100, image: laptop15 },
    { id: 6, name: 'Lenovo IdeaPad Slim 1 Intel Celeron N4020 4th Gen HD Thin & Light Laptop', price: 23836, image: laptop16 },
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
      <h1 className="title">Laptops</h1>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{formatCurrency(product.price)}</p>
            <div className="button-container">
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

export default LaptopPage;
