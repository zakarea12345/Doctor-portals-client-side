import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../images/login.png';

const LogIn = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange =  e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        alert('hello')
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:8}}>
              <Typography variant="body1" gutterBottom>
                 Login
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                 <TextField
                  sx={{width:'75%', m:1}}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onChange={handleOnChange}
                  variant="standard" />
                  <br />
                 <TextField
                  sx={{width:'75%', m:1}}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  variant="standard" />
                  <br />
                  
                  <Button
                   variant="contained"
                   type="submit"
                   sx={{width:'75%', m:1}}
                   >Login</Button>

                   <Link to="/register">
                    <Button variant="text">New User? Please Register</Button>
                  </Link>
              </form>
              </Grid>
              <Grid item xs={12} md={6}>
                 <img style={{width:"100%"}} src={login} alt="" />
              </Grid>
            </Grid>
        </Container>
    );
};

export default LogIn;