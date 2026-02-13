import React from "react";
import kyuLogo from '/src/assets/Logo.png'
import './SideBar.css'

function SideBar (){
    return(
        <div className="admin-sidebar">
        
                    <div className="admin-sidebar-logo">
                        <img src={kyuLogo} alt="" className="KyuLogo" />
                    </div>
        
                    <h1 className="  text-center text-2xl font-bold">Admin</h1>
                        <hr />
                    <div className="sidebar-content">
                        <i class="fa-solid fa-house-user" id="admin-icon-side"></i>
                        <a href="">Dashboard</a>
                    </div>
        
                    
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-users" id="admin-icon-side"></i>
                        <a href="">Students</a>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fas fa-graduation-cap" id="admin-icon-side"></i>
                        <a href="">Teachers</a>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-book-open" id="admin-icon-side"></i>
                        <a href="">Classes</a>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-marker" id="admin-icon-side"></i>
                        <a href="">Marks</a>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-clipboard-user" id="admin-icon-side"></i>
                        <a href="">Attendencs</a>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-calendar" id="admin-icon-side"></i>
                        <a href="">Time table</a>
                    </div>
        
                    
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-gear" id="admin-icon-side"></i>
                        <a href="">Setting</a>
                    </div>
                    <hr />
                    <div className="admin-gmail">
                        <h2 className="text-center font-semibold text-2xl">Log out</h2>
                    </div>
                </div>
    )
}
export default SideBar;