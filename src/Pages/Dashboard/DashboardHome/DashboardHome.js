import { Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Navigation/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const[date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Calender
                date={date}
                setDate= {setDate}
              ></Calender>
            </Grid>
            <Grid item xs={12} md={8}style={{width:"100%"}}>
               <Appointments date={date}></Appointments>
            </Grid>
        </Grid>

    );
};

export default DashboardHome;