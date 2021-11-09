import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Booking = ({booking}) => {
    const {name, time, space} = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
           <Paper elevation={3} sx={{py:5}}>
              <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' , fontWeight:600 }}>
                  {name}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                  {time}
              </Typography>
              <Typography variant="caption" gutterBottom component="div">
                  {space} Spaces Available
              </Typography>
              <Button variant="contained">BOOK APPOINTMENT</Button>
           </Paper>    
        </Grid>
    );
};

export default Booking;