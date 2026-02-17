import React from "react";
import { Link } from "react-router-dom";
import './ResetPassword.css'
import kyuLogo from '/src/assets/Logo.png'



function ResetPassword (){
    return(
        <div className="reset-container">
            <form action="post" className="reset-content">
                
                <div className="Kyu">
                    <img src={kyuLogo} alt="" className="KyuLogo" />
                </div>
                <div>
                    <div className="reset-inputs">
                        <label htmlFor="new password">New password</label>
                        <div className="reset-wrapper">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" id="new password" placeholder="New password" required />
                        </div>
                    </div>
                    <div className="reset-inputs">
                        <label htmlFor="comfirm password">Comfirm password</label>
                        <div className="reset-wrapper">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password"  id="comfirm password" placeholder="Comfirm password" required />
                        </div>
                        <button>Set Password</button>
                    </div>
                    <p>Remembered Password? <Link to='/' id="press"> Login</Link> </p>
                </div>
            </form>
        </div>
    )
}
export default ResetPassword;