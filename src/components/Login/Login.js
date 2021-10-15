import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
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
                <button className='btn-regular'>Google Signin</button>
            </div>
        </div>
    );
};

export default Login;