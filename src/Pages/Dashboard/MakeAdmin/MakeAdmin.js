import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
   const handleAdminSubmit = e => {
       const user = {email}
       fetch('http://localhost:5000/users/admin',{
           method: 'PUT',
           headers: {
               'content-type' : 'application/json'
           },
           body: JSON.stringify(user)
       })
       .then(res=> res.json)
       .then(data => {
           if(data.modifiedCount){
                setSuccess(true);
           }
       })
       e.preventDefault()
   }
    return (
        <div>
            <Typography variant='h4' style={{textAlign:'center'}}>Make An Admin</Typography>
            <form onSubmit={handleAdminSubmit} style={{textAlign:'center'}}>
              <TextField 
               label="Email" 
               variant="standard"
               type ="email"
               style={{width:"40%"}}
               onBlur={handleOnBlur} />
               <br />
               <br />
               
              <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin successfully!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;