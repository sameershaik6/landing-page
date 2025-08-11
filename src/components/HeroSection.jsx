// components/HeroSection.jsx

import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";

const  HeroSection = () => {
  return (
    <Box id="home" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
              Your Health, Our{" "}
              <Typography
                component="span"
                color="success.main"
                fontWeight="bold"
              >
                Priority
              </Typography>
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              We provide top-quality healthcare services with professional
              doctors and modern facilities, ensuring your well-being every
              step of the way.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 3 }}>
              <Button
                variant="contained"
                color="success"
                size="large"
                href="#services"
              >
                View Services
              </Button>
              <Button
                variant="outlined"
                color="success"
                size="large"
                href="#contact"
              >
                Book Appointment
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://plus.unsplash.com/premium_photo-1661580455055-1628ab6dd0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D"
              alt="Healthcare Professionals"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;