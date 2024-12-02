import React, { useState } from 'react';
import './Ass.css';
import { Pagination, Button } from '@mui/material';

import accessory1 from '../Assets/Accessory1.jpg';
import accessory2 from '../Assets/Accessory2.jpg';
import accessory3 from '../Assets/Accessory3.jpg';
import accessory4 from '../Assets/Accessory4.webp';
import accessory5 from '../Assets/Accessory5.jpg';
import camera2 from '../Assets/camera2.jpg';
const AllAccessoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const accessories = [
    { id: 1, name: ' Multimedia USB Keyboard ', price: 580, image: accessory1 },
    { id: 2, name: 'Logitech MK275 Wireless Keyboard And Mouse Combo', price: 3599, image: accessory2 },
    { id: 3, name: 'Keyboard Dell KB216', price: 999, image: accessory3 },
    { id: 4, name: 'Dell MS116 Optical Mouse', price: 290, image: accessory4 },
    { id: 5, name: 'Acer Ha220Q 21.5 Inch LCD Full Hd IPS Ultra Slim Monitor', price: 8999, image: accessory5 },
    { id: 6, name: 'Hikvision DS-2CE76D0T-ITPFS 2MP Dome Camera', price: 1600, image: camera2 },  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const totalPages = Math.ceil(accessories.length / productsPerPage);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = accessories.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="page-container">
      <h1 className="title">All Accessories</h1>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{formatCurrency(product.price)}</p>
            <div className="button-group">
              <Button variant="outlined" color="primary" size="small" style={{ marginRight: '10px' }}>
                Learn More
              </Button>
              <Button variant="contained" color="primary" size="small">
                Buy
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="pagination-container">
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          variant="outlined" 
          color="primary" 
        />
      </div> */}
    </div>
  );
};

export default AllAccessoriesPage;
