import React from "react";
// import { Link } from "react-router-dom";
import kyuLogo from '/src/assets/Logo.png'
import './SideBar.css'

function SideBar ( {role, navigation}){
   
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
                <button className="text-center font-semibold text-2xl" >Log out</button>
            </div>

        
                    
                </div>
    )
}
export default SideBar;