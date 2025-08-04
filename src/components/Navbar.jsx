import React from 'react';
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Box>
                    <Button color="inherit" component="a" href="#home">Home</Button>
                    <Button color="inherit" component="a" href="#about">About</Button>
                    <Button color="inherit" component="a" href="#services">Services</Button>
                    <Button color="inherit" component="a" href="#contact">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;