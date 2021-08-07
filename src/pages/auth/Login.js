import React, {useState, useEffect} from 'react';
import './Login.css';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {signIn, reset} from '../../redux/auth/authActions';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const uid = useSelector(state => state.auth.uid);
    const auth_error = useSelector(state => state.auth.loginError);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(signIn(email,password));
    }
    
    useEffect(() => {
      if(uid){
        history.push('/');
      }
    })
    
    return (
    <div className="login-container">
       <div className="login-form">
        <h1>Sign-in</h1>
        <form className="loginForm"  onSubmit={handleSubmit}>
            <TextField id="email" type="email" value={email} className="loginInput"  onChange={e => setEmail(e.target.value)} label="Email" /><br/>
            <TextField id="password" type="password" value={password} className="loginInput" onChange={e => setPassword(e.target.value)} label="password" />
            <br/><br/>
            <button type="submit"  className="loginButton" size="small" >Sign-In</button>
            <br/>
            <NavLink to="/register" onClick={() => dispatch(reset())}><h4>Create an account</h4></NavLink>
            
        </form>
        { auth_error ? <p className="text-danger">{auth_error}</p> : null}
       </div>

    </div>
    )
}

export default Login
