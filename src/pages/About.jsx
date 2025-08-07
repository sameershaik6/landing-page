import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#ad5c93ff',
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
          About
        </Typography>

        {/* You can add more contact form or info here */}
      </Container>
    </Box>
  );
};

export default About;