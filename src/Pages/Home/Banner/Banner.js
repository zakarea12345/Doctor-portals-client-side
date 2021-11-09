import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography ,Container } from '@mui/material';

const bannerBg ={
    background: `url(${bg})`,
   

};

const verticalCenter ={
    display :'flex',
    alignItems : 'center',
    height: '450px'
    
}

const Banner = () => {
    return (
        <Container style={{...bannerBg, marginTop:'70px'}} sx={{ flexGrow: 1 }}>
           <Grid container spacing={2}>
             <Grid style={{...verticalCenter,textAlign:'left'}} item xs={12} md={6}>
               <Box>
               <Typography variant="h3">
                    Your New Smile 
                    <br />
                    Starts Here
                </Typography>
                <Typography variant='h6' sx={{my:3,fontSize:'13',color:'gray', fontWeight:'300'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, in provident ex vero consequuntur facilis. Vel adipisci vitae sit corporis?
                </Typography>
                <Button variant='contained' style={{color:'#5CE7ED'}}>Get Apppointnent</Button>
               </Box>
             </Grid>
             <Grid item xs={12} md={6} style={verticalCenter}>
                <img src={chair} alt="" style={{width:'350px'}} />
             </Grid>
           </Grid>
        </Container>
    );
};

export default Banner;
