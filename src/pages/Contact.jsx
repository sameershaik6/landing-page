import React from "react";
import { Container, Grid, TextField, Button, Typography, Box, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Container id="contact" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: "text.secondary" }}>
        Have questions or want to book an appointment? Fill out the form or reach us directly.
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box component="form" noValidate autoComplete="off">
              <TextField label="Name" fullWidth margin="normal" />
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Phone Number" fullWidth margin="normal" />
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" size="large" sx={{ mt: 2 }} fullWidth>
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <PhoneIcon sx={{ color: "primary.main", mr: 1 }} />
              <Typography variant="body1">+91 98765 43210</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <EmailIcon sx={{ color: "primary.main", mr: 1 }} />
              <Typography variant="body1">info@healthcare.com</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ color: "primary.main", mr: 1 }} />
              <Typography variant="body1">
                123 Health Street, Hyderabad, India
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;