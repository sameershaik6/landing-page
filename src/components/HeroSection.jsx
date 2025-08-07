// components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                px: 2,
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" gutterBottom>
                    Welcome to My Website
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Learn modern web development with React and Material UI.
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;
