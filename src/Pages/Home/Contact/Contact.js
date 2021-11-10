import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import TextField from '@mui/material/TextField';


const contactForm = {
    background: `url(${bg})`,
    marginTop : 45,
    backgroundColor: 'rgba(45,58,74, 0.9)',
    backgroundBlendMode : 'darken, luminosity'
};


const Contact = () => {
    return (
        <Box style={contactForm} sx={{p:5}}>
            <Container style={{textAlign:'center'}} >
            <Typography variant='h6' sx={{ color: 'info.main' }}>
                    Contact Us
            </Typography>
            <Typography variant='h3' style={{color:'white'}} >
                    Always Connect With Us
            </Typography>
            <TextField id="outlined-basic" required placeholder="Email Address" variant="outlined" style={{width:'60%', backgroundColor:'white', marginBottom:'10px'}}/>
            <br />
            <TextField id="outlined-basic" required placeholder="Subject" variant="outlined" style={{width:'60%', backgroundColor:'white', marginBottom:'10px'}}/>
            <br />
            <TextField
              style={{width:'60%', backgroundColor:'white', marginBottom:'10px'}}
              id="filled-multiline-static"
              multiline
              rows={4}
              placeholder="Your Message"
              variant="filled"
            />
            <br />
            <Button variant='contained'>Submit</Button>

            </Container>
        </Box>
    );
};

export default Contact;