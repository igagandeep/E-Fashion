import React from 'react';
import './Login.css';
import {NavLink} from 'react-router-dom';
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


function Login() {
    const classes = useStyles();
    return (
    <div className="login-container">
       <div className="login-form">
        <h1>Sign-in</h1>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField className={classes.input}  label="Email" /><br/>
            <TextField className={classes.input} label="password" />
            <br/><br/>
            <Button className={classes.button} size="small">Signin</Button>
            <br/>
            <NavLink to="/register"><h4>Create an account</h4></NavLink>
        </form>
       </div>

    </div>
    )
}

export default Login
