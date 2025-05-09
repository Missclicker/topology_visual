import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(45deg, #4caf50 90%, #2e7d32 30%)'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Network Topology Visualizer
        </Typography>
        <Button color="inherit" component={Link} to="/">Main</Button>
        <Button color="inherit" component={Link} to="/routers">Routers</Button>
        <Button color="inherit" component={Link} to="/isis-links">ISIS Links</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar; 