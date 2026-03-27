import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kyuLogo from '/src/assets/Logo.png'
import './SideBar.css'

function SideBar ( {role, navigation}){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const logOut = () =>{
        setLoading(true)

        setTimeout(() =>{
            localStorage.removeItem('user')
            navigate('/testLogin', {replace: true})
        }, 3000)
    }
   
    return(
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={kyuLogo} alt="" className="KyuLogo" />
            </div>

            <h1 className="  text-center text-2xl font-bold" >{role}</h1>
            <hr />

            <div>{navigation}</div>
            <hr />

            <div className="Logout-btn">
                <button onClick={logOut} className="text-center font-semibold text-2xl" disabled={loading} > 
                    {loading?(
                        <span className="spinner-container">
                            <span className="spinner"></span>
                            Logging out...
                        </span>
                    ):(
                        <div>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Logout
                        </div>
                    )}
                </button>
            </div>

        
                    
                </div>
    )
}
export default SideBar;