import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
   const handleAdminSubmit = e => {
       e.preventDefault()
   }
    return (
        <div>
            <Typography variant='h4' style={{textAlign:'center'}}>Make An Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
              <TextField 
               label="Email" 
               variant="standard"
               type ="email"
               onBlur={handleOnBlur} />
              <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;