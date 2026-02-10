import React from "react";
import kyuLogo from '/src/assets/images-removebg-preview.png'
import './SideBar.css'

function SideBar (){
    return(
        <div className="admin-sidebar">
        
                    <div className="Kyu">
                        <img src={kyuLogo} alt="" className="KyuLogo" />
                    </div>
        
                    <h3 style={{color:"black", textAlign:"center", marginBottom: "10px",fontWeight:"bold"}}>Admin.</h3>
                        <hr />
                    <div className="sidebar-content">
                        <i class="fa-solid fa-house-user" id="admin-icon-side"></i>
                        <a href="">Dashboard</a>
                    </div>
        
                    
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-users" id="admin-icon-side"></i>
                        <a href="">students</a>
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
                        <a href="">setting</a>
                    </div>
                    <hr />
                    <div className="admin-gmail">
                        <h2>admin@gmail.com</h2>
                    </div>
                </div>
    )
}
export default SideBar;