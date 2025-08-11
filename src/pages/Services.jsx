import React from "react";
import { Container, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

// Example service data
const services = [
  {
    title: "General Checkup",
    description: "Comprehensive health checkups to ensure your well-being.",
    image: "https://media.istockphoto.com/id/1302922407/photo/doctor-and-patient-are-discussing-at-clinic-and-writting-prescription-medicine-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=CRrlVZinDoCOHLlip4m1wrGcpTH34sEXc29GdTmwI0s=",
  },
  {
    title: "Dental Care",
    description: "Professional dental cleaning and treatment services.",
    image: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Eye Care",
    description: "Eye exams, vision correction, and preventive care.",
    image: "https://plus.unsplash.com/premium_photo-1661779604380-da100f3d5d82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllcyUyMGNoZWNrfGVufDB8fDB8fHww",
  },
  {
    title: "Pediatric Care",
    description: "Specialized healthcare for infants, children, and teens.",
    image: "https://plus.unsplash.com/premium_photo-1666299880508-bffece864e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVkaWF0cmljfGVufDB8fDB8fHww",
  },
  {
    title: "Physiotherapy",
    description: "Personalized physiotherapy sessions to aid recovery.",
    image: "https://media.istockphoto.com/id/1460882116/photo/physiotherapy-range-of-motion-assessment.webp?a=1&b=1&s=612x612&w=0&k=20&c=P0UYm9m_cYFOiHQ6R8kyHsNYBwilwtYw60CYBIuit00=",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency medical services for urgent care.",
    image: "https://media.istockphoto.com/id/1295774052/photo/doctor-wheeling-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc7hXlKM0QUtaQx4tOT5obae9TA3ElTccpyPcAdpGnE=",
  },
];

const Services = () => {
  return (
    <Container id="services" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Our Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        paragraph
        sx={{ mb: 4, color: "text.secondary" }}
      >
        We provide a wide range of healthcare services to meet your needs.
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;