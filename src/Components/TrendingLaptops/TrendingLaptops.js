import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';

import laptop11 from '../Assets/Laptop11.jpg';
import laptop12 from '../Assets/Laptop12.jpg';
import laptop13 from '../Assets/Laptop13.jpg';
import laptop14 from '../Assets/Laptop14.jpg';
import laptop15 from '../Assets/Laptop15.jpg';

const TrendingLaptopsPage = () => {
  const products = [
    { id: 1, name: 'HP 247 G8 Laptop', price: '₹35000', image: laptop11 },
    { id: 2, name: 'DELL Latitude 5490', price: '₹45000', image: laptop12 },
    { id: 3, name: 'Acer Aspire 3 Laptop', price: '₹30000', image: laptop13 },
    { id: 4, name: 'Acer Extensa 15', price: '₹38000', image: laptop14 },
    { id: 5, name: 'Lenovo V15 G2', price: '₹42000', image: laptop15 },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Trending Laptops
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {products.map((product) => (
          <Card
            key={product.id}
            style={{
              minWidth: '300px',
              margin: '10px',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={product.image}
              alt={product.name}
              style={{ objectFit: 'contain', padding: '10px' }}
            />
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default TrendingLaptopsPage;
