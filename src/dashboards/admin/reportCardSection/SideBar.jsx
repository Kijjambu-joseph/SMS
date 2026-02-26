import React from "react";
import { Link } from "react-router-dom";
import kyuLogo from '/src/assets/Logo.png'
import "/src/dashboards/admin/SideBar.css"

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
                        <Link to="/admin">Dashboard</Link>
                    </div>
        
                    
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-users" id="admin-icon-side"></i>
                        <Link to="/admin/studentSection">Students</Link>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fas fa-graduation-cap" id="admin-icon-side"></i>
                        <Link to="/admin/teacherSection">Teachers</Link>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-book-open" id="admin-icon-side"></i>
                        <Link to="/admin/classSection" id="dashboard-link">Classes</Link>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-marker" id="admin-icon-side"></i>
                        <Link to="/admin/marksSection">Marks</Link>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-clipboard-user" id="admin-icon-side"></i>
                        <Link to="/admin/attendanceSection">Attendencs</Link>
                    </div>
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-calendar" id="admin-icon-side"></i>
                        <Link to="/admin/timetableSection">Time table</Link>
                    </div>
        
                    
        
                    <div className="sidebar-content">
                        <i class="fa-solid fa-gear" id="admin-icon-side"></i>
                        <Link to="/admin/settingSection">Setting</Link>
                    </div>
                    <hr />
                    <div className="admin-gmail">
                        <h2 className="text-center font-semibold text-2xl">Log out</h2>
                    </div>
                </div>
    )
}
export default SideBar;