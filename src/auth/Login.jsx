import { Link } from "react-router-dom";
import React from 'react'
import { useState, useEffect} from "react";
import kyuLogo from '/src/assets/Logo.png'
import './Login.css'


function LoginForm(){
    const [LoginData, setLoginData]= useState({
        username:'',
        password:''
    })

    const [LoginMessage, setLoginMessage] = useState("");
    const [FailureMessage, setFailureMessage] = useState(" Not Submited❌");
    const [Loading, setLoading] = useState(false);
    // const [Loading, setLoading] = useState(false);
    // const [LoadingMessage, setLoadingMessage] = useState('');

    const handleChange = (e) => {
         console.log(LoginData);
         const { name, value } = e.target;

        setLoginData(prev => ({
        ...prev,
        [name]: value
        }));
  };


   const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // setMessage("");

        try {
        await axios.post(
            "http://localhost:5000/api/students",
            LoginData
        );

        setLoginMessage("Loged in ✅");
        console.log({LoginMessage})

        setLoginData({
            name: "",
            email: "",
            age: ""
        });

        } catch (error) {
        setLoginMessage("Error submitting form ❌");
        console.log({LoginMessage})
        }

        setLoading(false);
    };

    

    return (
        <div className='loginForm'>
            <form className='form-content ' onSubmit={handleSubmit}>
                <div className="Kyu">
                    <img src={kyuLogo} alt="" className="KyuLogo" />
                </div>
                <h1>Sign In</h1>
                <div className="login-inputs">

                    <div className="uesr-name">
                        <label htmlFor="username">Username</label>
                        <div className="login-user-wrapper">
                            <i className="fa-solid fa-user"></i>

                            <input type="email" 
                            id='username' 
                            name="username"
                            value={LoginData.username}
                            onChange={handleChange}
                            required 
                            placeholder='Username'
                           
                            />
                        </div>
                    </div>

                    <div className="uesr-name">
                        <label htmlFor="password">Password</label>
                        <div className="login-user-wrapper">
                            <i className="fa-solid fa-lock"></i>

                            <input type="password" 
                            name="password"
                            value={LoginData.password}
                            onChange={handleChange}
                            id='password'
                            required 
                            placeholder='Password'
                            />

                        </div>
                    </div>
                    
                    <button type="submit" className="login-btn" disabled={Loading}>{Loading ? "Logging in..." : "Login"}</button>
                    <p>Forgot password? <Link to='/RequestToken'  className="addressed" >Click here</Link> to Reset</p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm