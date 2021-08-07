import React, {useState, useEffect} from 'react';
import './Register.css';
import TextField from '@material-ui/core/TextField';
import {useSelector,useDispatch} from 'react-redux';
import {signup} from '../../redux/index';
import {useHistory} from 'react-router-dom';



function Register() {
    const [user, setUser] = useState({firstName: '', lastName: '', email : '', password : ''});
    const authError = useSelector(state => state.auth.registerError);

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
        if(uid){
          history.push('/');
        }
    })

    return (
    <div className="register-container">
       <div className="register-form">
        <h1>Sign-up</h1>
        <form className="registerForm" noValidate onSubmit={handleSubmit} autoComplete="off">
        
            <TextField type="text" className="registerInput" id="firstName" onChange={handleChange} label="First Name" required/><br/>    
            <TextField type="text" className="registerInput"  id="lastName"  onChange={handleChange} label="Last Name" required/><br/>
            <TextField  type="email" className="registerInput"  id="email"  onChange={handleChange} label="Email" /><br/>
            <TextField type="password" className="registerInput" id="password" label="password"  onChange={handleChange} />
            <br/><br/>
            <button type="submit" className="registerButton" size="small">Register</button>
            <br/>
        </form>
            {authError ? <p className="danger-text">{authError}</p> : <p></p>}
       </div>

    </div>
    )
}

export default Register
