import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png';



const verticalCenter ={
    display :'flex',
    alignItems : 'center',
    flexDirection:'column',
    height: '450px',
    marginTop: '50px'
    
}

const IntroAboutAService = () => {
    return (
        <Container sx={{ flexGrow: 1 , my:5}} className="about-a-service">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={treatment} alt="" style={{height:700, width:500}} />
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <Typography variant='h3'>
                        Exceptional Dental Care On Your Terms
                    </Typography>
                    <Typography variant='h5' sx={{my:3,fontSize:'13',color:'gray', fontWeight:'300'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nihil ut facere laudantium tempora a maxime nisi omnis necessitatibus atque quas ipsum, vitae minima commodi, debitis tenetur ab ipsam delectus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nihil ut facere laudantium tempora a maxime nisi omnis necessitatibus atque quas ipsum, vitae minima commodi, debitis tenetur ab ipsam delectus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nihil ut facere laudantium tempora a maxime nisi omnis necessitatibus atque quas ipsum, vitae minima commodi, debitis tenetur ab ipsam delectus!
                    </Typography>
                    <Button style={{textAlign:'center'}} variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default IntroAboutAService;