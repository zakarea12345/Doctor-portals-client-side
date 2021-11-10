import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';



const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?',
       img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m:2 }} style={{textAlign:'center'}} variant="h6" component="div">
                  OUR SERVICES
                </Typography>
                <Typography style={{textAlign:'center'}} variant="h4" component="div" sx={{ fontWeight: 600, m:5 }}>
                  SERVICES WE PROVIDE
                </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   services.map(service => <Service
                   key={service.name}
                   service={service}
                   ></Service>)
               }
             </Grid>
          </Container>
       </Box>
    );
};

export default Services;