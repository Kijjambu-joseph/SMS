

import React from "react";
import { Link } from "react-router-dom";
import kyuLogo from '/src/assets/images-removebg-preview.png'

function SideBar(){
    return(
        <div style={{width: "23%", backgroundColor: "#000080e0", minHeight: "90vh", padding: "20px"}}>

            <div className="Kyu">
                <img src={kyuLogo} alt="" className="KyuLogo" />
            </div>

            <h3 style={{color:"white", textAlign:"center", marginBottom: "10px"}}>Student Dashboard</h3>

            <div className="links">
                <i class="fa-solid fa-house-user"></i>
                <a href="">Dashboard</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-message"></i>
                <a href="">Messages</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-users"></i>
                <a href="">Users</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-bell"></i>
                <a href="">Notification</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-circle-info"></i>
                <a href="">Information</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-marker"></i>
                <a href="">Marks</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-clipboard-user"></i>
                <a href="">Attendencs</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-calendar"></i>
                <a href="">Schedules</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-circle-question"></i>
                <a href="">Help</a>
            </div>

            <div className="links">
                <i class="fa-solid fa-gear"></i>
                <a href="">Settings</a>
            </div>
        </div>
    )
}

export default SideBar;