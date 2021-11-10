import { Alert, Button, CircularProgress, Container, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const{registerUser, isLoading , user, error} = useAuth();
    const history = useHistory();
    //const location = useLocation();
    const historyChange = () =>{
        history.push('/login')
    };
    const [loginData, setLoginData] = useState({})
    const handleOnBlur =  e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password Did Not Match')
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:8}}>
              <Typography style={{marginLeft:'180px'}} variant="body1" gutterBottom>
                 Register
              </Typography>
              { !isLoading &&
                <form onSubmit={handleLoginSubmit}>
                  <TextField
                   sx={{width:'75%', m:1}}
                   id="standard-basic"
                   label="Your Name"
                   type="name"
                   name="name"
                   onBlur={handleOnBlur}
                   variant="standard" />
                   <br />
                  <TextField
                   sx={{width:'75%', m:1}}
                   id="standard-basic"
                   label="Your Email"
                   type="email"
                   name="email"
                   onBlur={handleOnBlur}
                   variant="standard" />
                   <br />
                  <TextField
                   sx={{width:'75%', m:1}}
                   id="standard-basic"
                   label="Your Password"
                   type="password"
                   name="password"
                   onBlur={handleOnBlur}
                   variant="standard" />
                   <br />
                   
                  <TextField
                   sx={{width:'75%', m:1}}
                   id="standard-basic"
                   label="Retype Your Password"
                   type="password"
                   name="password2"
                   onBlur={handleOnBlur}
                   variant="standard" />
                   <br />
                   
                   <Button
                    variant="contained"
                    type="submit"
                    sx={{width:'75%', m:1}}
                    >Register</Button>
 
                   
                     <Button onClick={historyChange} variant="text">Already Registered? Please Login</Button>
                     
               </form>
              }

              {
                  isLoading && <CircularProgress />
              }
              {
                  user?.email && <Alert severity="success">User created successfully!</Alert>
              }
              {
                  error && <Alert severity="error">{error}</Alert>
              }
             
              </Grid>
              <Grid item xs={12} md={6}>
                 <img style={{width:"100%"}} src={login} alt="" />
              </Grid>
            </Grid>
        </Container>
    );
};

export default Register;