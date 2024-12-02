import React, { useState } from 'react';
import './Products.css';
import { Button, Pagination } from '@mui/material';

import laptop11 from '../Assets/Laptop11.jpg';
import laptop12 from '../Assets/Laptop12.jpg';
import laptop13 from '../Assets/Laptop13.jpg';
import laptop14 from '../Assets/Laptop14.jpg';
import laptop15 from '../Assets/Laptop15.jpg';
import laptop16 from '../Assets/Laptop16.jpg';
import printer21 from '../Assets/printer21.webp';
import printer22 from '../Assets/printer22.jpg';
import camera1 from '../Assets/camera1.jpg';
import camera2 from '../Assets/camera2.jpg';
import nail from '../Assets/nail.jpg';
import pipe from '../Assets/pipe.jpg';
import wire from '../Assets/wire.jpg';
import coperwire from '../Assets/coperwire.jpg';
import juncbox from '../Assets/juncbox.jpg';
import pipe2 from '../Assets/pipe2.jpg';
import glue from '../Assets/glue.jpg';
import bold from '../Assets/bold.jpg';

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const products = [
    { id: 1, name: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor', price: 34990, image: laptop14 },
    { id: 2, name: 'Lenovo V15 G2 Laptop with AMD ryzen 3 5300u', price: 28100, image: laptop15 },
    { id: 3, name: 'Lenovo IdeaPad Slim 1 Intel Celeron N4020 4th Gen HD Thin & Light Laptop', price: 23836, image: laptop16 },
    { id: 4, name: 'Canon E4570 All-in-One Wi-Fi Ink Efficient Colour Printer', price: 13499, image: printer21 },
    { id: 5, name: 'Canon E4570 All-in-One Wi-Fi Ink Efficient Colour Printer', price: 8349, image: printer22 },
    { id: 6, name: 'DELL Latitude 5490 Core i5 8th Gen Laptop', price: 27849, image: laptop12 },
    { id: 7, name: 'Acer Aspire 3 Laptop AMD 3020e Dual-Core Processor', price: 24990, image: laptop13 },
    { id: 8, name: '1 1/2 ” Nail', price: 35, image: nail },
    { id: 9, name: '1 1/4 ” GI Pipe', price: 280, image: pipe },
    { id: 10, name: '1.5″ Wire', price: 11, image: wire},
    { id: 11, name: '1.5Sqmm Flex Wire', price: 20, image: coperwire },
    { id: 12, name: '1″ 2Way Junction Box', price: 15, image: juncbox },
    { id: 13, name: '1″ PVC pipe 2.5mm', price: 109, image: pipe2 },
    { id: 14, name: 'PV Seal Glue', price: 70, image: glue },
    { id: 15, name: '2″naga Bolt', price: 28750, image: bold },
    { id: 16, name: 'CCTV HIKVISION CCTV CAMERA DS-2DE4425IW', price: 43619, image: camera1 },
    { id: 17, name: 'Hikvision DS-2CE76D0T-ITPFS 2MP Dome Camera', price: 1600, image: camera2 },
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
      <h1 className="title">Products</h1>
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
                color="primary" 
                className="buy-button"
                onClick={() => window.open('https://hifiitpark.com/', '_blank')}
              >
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

export default ProductPage;
