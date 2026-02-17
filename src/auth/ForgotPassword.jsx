import React from "react";
import { Link } from "react-router-dom";
import './ForgotPassword.css'
import kyuLogo from '/src/assets/Logo.png'


function ForgotPassword (){
    return(
        <div className="forgot-container">
            <form action="post" className="forgot-content">
                <div className="Kyu">
                    <img src={kyuLogo} alt="" className="KyuLogo" />
                </div>
                <h1>Request Link</h1>
                <div className="forgot-inputs">

                    <div className="forgot-data">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <i class="fa-solid fa-envelope left"></i>
                            <span className="divider"></span>
                            <input type="email" id="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="forgot-btn">
                        <button>Send Link</button>
                    </div>
                    <p>Have account?, <Link to='/' id="proceed">Login</Link></p>
                </div>
            </form>
        </div>
    )
}
export default ForgotPassword;