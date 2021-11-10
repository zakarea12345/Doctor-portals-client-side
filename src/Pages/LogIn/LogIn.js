import { Alert, Button, CircularProgress, Container, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png';

const LogIn = () => {
    const {loginUser, user, error ,isLoading, signInWithGoogle, resetPassword} = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handeForgotPassword = () =>{
        resetPassword(loginData.email)
    }
    
    const handleOnChange =  e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:8}}>
              <Typography variant="body1" gutterBottom style={{marginLeft:'180px'}}>
                 Login
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />

                        
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <Link>
                        <Button onClick={handeForgotPassword} type="submit"  sx={{ width: '75%', m: 1 }} variant="text">Forgot Password</Button>
                        </Link>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </form>
                    
                    <p>...............................................</p>
                    <Button onClick={handleGoogleSignIn} style={{width:'75%'}} variant="contained">Google Sign In</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                 <img style={{width:"100%"}} src={login} alt="" />
              </Grid>
            </Grid>
        </Container>
    );
};

export default LogIn;