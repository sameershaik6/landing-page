import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Services = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#7f5cad',
        display: 'flex',
        alignItems: 'center',
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem',
            },
          }}
        >
          Services
        </Typography>

        {/* You can add more contact form or info here */}
      </Container>
    </Box>
  );
};

export default Services;