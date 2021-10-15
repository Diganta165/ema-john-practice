import React from 'react';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    // const {user, signInUsingGoogle} = useFirebase;
    const {signInUsingGoogle} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop'

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Your Email'/>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
                <p>New to ema-john <Link to="/register">Create New Account</Link></p>
                <div>------------or------------</div>
                <button className='btn-regular'
                // onClick={signInUsingGoogle}
                onClick={handleGoogleLogin}
                >Google Signin
                </button>
            </div>
        </div>
    );
};

export default Login;