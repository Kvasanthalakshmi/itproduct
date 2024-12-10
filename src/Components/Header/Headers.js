import React, { useState } from 'react';
import { Grid, Typography, Menu, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo1.jpg';
import Home from '../Home/Home';
import './Header.css';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [blurBackground, setBlurBackground] = useState(false);
  const [activeItem, setActiveItem] = useState(''); // Track the active item

  const isOpen = Boolean(anchorEl);

  // Handle menu open and close
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBlurBackground(true);  // Enable blur when menu opens
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBlurBackground(false); // Remove blur when menu closes
  };

  const handleMenuItemClick = (itemName) => {
    setActiveItem(itemName); // Set active item
    handleClose();
  };

  return (
    <div>
      {/* Header with navigation */}
      <header className="header">
        <Grid container spacing={7} justifyContent="center" alignItems="center">
          <Grid item lg={1}>
            <img src={logo} alt="Logo" style={{ width: '70%', height: '70px' }} />
          </Grid>
          <Grid item lg={0.9}>
            <Typography>
              <Link to="/" style={{ color: activeItem === 'Home' ? 'blue' : 'black' }} onClick={() => setActiveItem('Home')}>
                Home
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.9}>
            <Typography onClick={handleClick} style={{ color: activeItem === 'Product' ? 'blue' : 'black', cursor: 'pointer' }}>
              Product
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => handleMenuItemClick('All Products')}
                style={{ backgroundColor: activeItem === 'All Products' ? '#f0f0f0' : 'white' }}
              >
                <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>All Products</Link>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick('Laptop')}
                style={{ backgroundColor: activeItem === 'Laptop' ? '#f0f0f0' : 'white' }}
              >
                <Link to="/laptop" style={{ textDecoration: 'none', color: 'black' }}>Laptop</Link>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick('CCTV Camera')}
                style={{ backgroundColor: activeItem === 'CCTV Camera' ? '#f0f0f0' : 'white' }}
              >
                <Link to="/cctv" style={{ textDecoration: 'none', color: 'black' }}>CCTV Camera</Link>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick('Printer')}
                style={{ backgroundColor: activeItem === 'Printer' ? '#f0f0f0' : 'white' }}
              >
                <Link to="/printer" style={{ textDecoration: 'none', color: 'black' }}>Printer</Link>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item lg={0.9}>
            <Typography>
              <Link to="/service" style={{ color: activeItem === 'Service' ? 'blue' : 'black' }} onClick={() => setActiveItem('Service')}>
                Service
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.9}>
            <Typography>
              <Link to="/aboutus" style={{ color: activeItem === 'About Us' ? 'blue' : 'black' }} onClick={() => setActiveItem('About Us')}>
                About Us
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.9}>
            <Typography>
              <Link to="/contactus" style={{ color: activeItem === 'Contact Us' ? 'blue' : 'black' }} onClick={() => setActiveItem('Contact Us')}>
                Contact Us
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.9}>
            <Typography>
              <Link to="/helpdesk" style={{ color: activeItem === 'Help Desk' ? 'blue' : 'black' }} onClick={() => setActiveItem('Contact Us')}>
                HelpDesk
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.9}>
            <Typography>
              <SearchIcon style={{ color: 'black', cursor: 'pointer' }} />
            </Typography>
          </Grid>
        </Grid>
      </header>

      <div className={`page-content ${blurBackground ? 'blur' : ''}`}></div>
    </div>
  );
}

export default App;
