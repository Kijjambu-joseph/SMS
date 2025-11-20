import { Link } from "react-router-dom";
import React from 'react'
// import './index.css'


function LoginForm(){
    return (
        <div className='loginForm'>
            <form action="post" className='form-content'>
                <h1>Login Form</h1>
                <div className="login-inputs">

                    <div className="uesr-name">
                        <label htmlFor="username">Username</label>
                        <input type="email" id='username' required placeholder='Username'/>
                    </div>

                    <div className="uesr-name">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password'required placeholder='Password'/>
                    </div>
                    
                    <button className="login-btn">Login</button>
                    <p>Forgot password? <Link to='/student' id ="reset" >Reset</Link></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm