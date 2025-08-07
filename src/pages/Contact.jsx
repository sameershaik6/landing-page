import {Box,Container,Typography, useTheme } from '@mui/material'

const Contact = () =>{
    const theme = useTheme();
    return(
         <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#5cad8dff',
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
          Contact
        </Typography>

        {/* You can add more contact form or info here */}
      </Container>
    </Box>
  );
};


export default Contact;