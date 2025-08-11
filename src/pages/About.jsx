import React from 'react';
import { Box, Container, Typography, Divider,Grid } from '@mui/material';

const About = () => {

  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          About <Typography component="span" color="success.main">Us</Typography>
        </Typography>

        <Divider sx={{ width: 80, mx: "auto", my: 3, borderColor: "success.main" }} />

        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
              alt="Our Clinic"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Caring for Your Health with Excellence
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              At GreenLife Health Services, we are committed to providing
              exceptional medical care for you and your family. Our team of
              experienced doctors, nurses, and support staff ensure that you
              receive the best possible treatment in a comfortable and caring
              environment.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We specialize in preventive care, advanced diagnostics, and
              personalized treatment plans, so you can enjoy a healthier and
              happier life.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;