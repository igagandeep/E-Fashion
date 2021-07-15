import React from 'react';
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
 
 
    root: {
    width: 400,
    padding:'0px',
  },
  form:{
    width:400,
  },
  input:{
    width:400,
    marginRight:'20px'
  },
  button:{
      width:'100%',
      backgroundColor:'#000',
      color:'#fff',
      '&:hover': {
        backgroundColor: "#000",
     },
  }

});


function Register() {
    const classes = useStyles();
    return (
    <div className="register-container">
       <div className="register-form">
        <h1>Sign-up</h1>
        <form className={classes.form} noValidate autoComplete="off">
        
            <TextField className={classes.input}  label="Username" /><br/>    
            <TextField className={classes.input}  label="Email" /><br/>
            <TextField className={classes.input} label="password" />
            <TextField className={classes.input} label="Confirm Password" />
            <br/><br/>
            <Button className={classes.button} size="small">Register</Button>
            <br/>
        </form>
       </div>

    </div>
    )
}

export default Register
