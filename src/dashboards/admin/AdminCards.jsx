import React from "react";
import './AdminCards.css'


function AdminCards (){
    return(
            <div className="admin-container">
                <h1>Dashboard</h1>
                <h2>Welcome Back! Here's your overview.</h2>
                <div className="admin-dashboard-cards">
                    <div className="admin-card flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <i class="fa-solid fa-users" id="admin-icon-student"></i>
                            <h1>Total Students</h1>
                        </div>
                        <p>1,234</p>
                    </div>

                    <div className="admin-card flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <i class="fas fa-graduation-cap" id="admin-icons-teachers"></i>
                            <h1>Total Teachers</h1>
                        </div>
                        <p>80</p>
                    </div>

                    <div className="admin-card flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <i class="fa-solid fa-book-open" id="admin-icons-classes"></i>
                            <h1>Classes Today</h1>
                        </div>
                        <p>52</p>
                    </div>

                    <div className="admin-card flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <i class="fa-solid fa-users" id="admin-icons-rate"></i>
                            <h1>Attendance Rate</h1>
                        </div>
                        <p>95.4%</p>
                    </div>
                </div>
            </div>
    )
}
export default AdminCards;