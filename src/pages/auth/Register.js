import React, {useState, useEffect} from 'react';
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useSelector,useDispatch} from 'react-redux';
import {signup} from '../../redux/index';
import {useHistory} from 'react-router-dom';
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
    const [user, setUser] = useState({firstName: '', lastName: '', email : '', password : ''});
    const authError = useSelector(state => state.auth.authError);

    const uid = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      dispatch(signup(user));
    }
    const handleChange = (e) => {
      setUser({
        ...user,
        [e.target.id] : e.target.value
      })
    }

    useEffect(() => {
        if(uid !== ''){
          history.push('/');
        }
    })

    return (
    <div className="register-container">
       <div className="register-form">
        <h1>Sign-up</h1>
        <form className={classes.form} noValidate onSubmit={handleSubmit} autoComplete="off">
        
            <TextField type="text" className={classes.input} id="firstName" onChange={handleChange} label="First Name" required/><br/>    
            <TextField className={classes.input}  id="lastName"  onChange={handleChange} label="Last Name" /><br/>
            <TextField  type="email" className={classes.input}  id="email"  onChange={handleChange} label="Email" /><br/>
            <TextField type="password" className={classes.input} id="password" label="password"  onChange={handleChange} />
            {/* <TextField className={classes.input} label="Confirm Password"  onChange={(e) => setConfirmPassword(e.target.value)}  /> */}
            <br/><br/>
            <Button type="submit" className={classes.button} size="small">Register</Button>
            <br/>
        </form>
            {authError ? <p className="danger-text">{authError}</p> : <p></p>}
       </div>

    </div>
    )
}

export default Register
