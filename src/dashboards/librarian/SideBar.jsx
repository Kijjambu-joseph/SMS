import React from "react";
import KyuLogo from '/src/assets/images-removebg-preview.png';

function SideBar(){
    return(
        <div className="side">
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src={KyuLogo} alt="" className="KyuLogo" />
            </div>
        
                
                <h1 style={{fontSize:"20px",textAlign:"center",color:"#ffffff",marginBottom:"20px"}}> LibrarianDashboard</h1>
        
            <div className="sidelinks">
                <i class="fa-solid fa-house-user"></i>
                <a href="">Dashboard</a>
            </div>

            <div className="sidelinks">
                <i class="fa-solid fa-book-open"></i>
                <a href="">Books Available</a>
            </div>

            <div className="sidelinks">
                <i class="fa-solid fa-tower-observation"></i>
                <a href="">Reservations</a>
            </div>

            <div className="sidelinks">
                <i class="fa-solid fa-computer"></i>
                <a href="">Circulation Desk</a>
            </div>

            <div className="sidelinks">
                <i class="fa-solid fa-warehouse"></i>
                <a href="">Inventory</a>
            </div>

            <div className="sidelinks">
                <i class="fa-solid fa-chart-simple"></i>
                <a href="">Reports and Analytics</a>
            </div>

            <div className="sidelinks">
                <i class="fa-solid fa-circle-info"></i>
                <a href="">Help</a>
            </div>
        </div>
    )
}
export default SideBar;