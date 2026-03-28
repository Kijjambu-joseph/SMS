// ADMIN CARD

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


// ADMIN CARDS CSS STYLE
.admin-container{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  background-color: red;
}

.admin-container .admin-dashboard-cards{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  background-color: palevioletred;
}

#admin-icon-student{
    color: green;
    font-size: 15px;
    border: 1px solid green;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  #admin-icons-teachers{
    color: #1E40AF;
    font-size: 15px;
    border: 1px solid #1E40AF;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  #admin-icons-classes{
    color: rgb(240, 164, 22);
    font-size: 15px;
    border: 1px solid rgb(240, 164, 22);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  #admin-icons-rate{
    color: green;
    font-size: 15px;
    border: 1px solid green;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .admin-container{
    margin-left: 30px;
  }
  .admin-container h1{
    font-size: 50px;
  }
  .admin-container h2{
    font-size: 20px;
    margin-bottom: 10px;
  }

  .admin-overview{
    display: flex;
    /* background-color: rebeccapurple; */
  }

  .admin-card{
    box-shadow: 0 0px 8px rgba(8, 8, 8, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  
  .admin-card h1{
    font-size: 15px;
    /* color: #1E40AF; */
    color: black;
  }

  .admin-card p{
    font-size: 15px;
    font-weight: bold;
  }

  .fa-book-open,
  .fa-graduation-cap,
  .fa-users{
    color: black;
  }

  // SIDE BAR CODE BACKUP

  import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/admin" id="dashboard-link">Dashboard</Link>
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
                        <Link to="/admin/classSection">Classes</Link>
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


// SIDE BAR CSS STYLE

:root{
    --primary-color: #2b3b67; 
    --secondary-color: white;
    --other-color:#ebebf1;
    --bg-main:#000080;
    --text-primary:#f3f5fa;
    --text-secondary:#090d12;
    --suplement-color:#1ea344;

    --font-family:"Poppins", sans-serif, Arial, Helvetica, sans-serif;
}

.admin-sidebar{
    width: 20%;
    height: 100vh;
    margin: 0px;
    /* border-radius: 5px; */
    /* background-color: #1E40AF; */
    padding: 20px;
    box-shadow: 0 0 5px gray;
    /* position: sticky;
    top: 100px; */
    color: var(--primary-color);
  }

  .admin-sidebar-logo {
    width: 100%;
    display: grid;
    place-items: center;
  }

  .admin-sidebar-logo img{
    width: 80px;
    height: 100px;
    margin-bottom: 20px;
  }

  .sidebar-content{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  #dashboard-link{
    width: 100%;
    background-color: var(--primary-color);
    color:white;
    padding: 5px 10px;
  }
  .sidebar-content a{
    color: var(--primary-color);
    font-weight: 600;
  }


  .sidebar-content i{
    color: var(--primary-color);
    font-size: 20px;
  }

  .fa-graduation-cap,
  .fa-book-open{
    color: #ffffff;
    font-size: 20px;
  }

  hr{
    margin-bottom: 10px;
    border: 1px solid gray;
  }


  .admin-gmail h2{
    color: var(--suplement-color);
  }

  
  // DASHBOARD PATHS

  <Route path="/student" element={<StudentDashboard />}/>
          <Route path="/librarian" element={<Libriarian />} />
          <Route path="/parent" element={<ParentDashboard />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/admin/studentSection" element={<StudentSection />}/>
          <Route path="/admin/teacherSection" element={<TeacherSection />}/>
          <Route path="/admin/classSection" element={<ClassSection />}/>
          <Route path="/RequestToken" element={<ForgotPassword />}/>
          <Route path="/resetPassword" element={<ResetPassword />}/>
          <Route path="/admin/marksSection" element={<MarksSection />}/>
          <Route path="/admin/attendanceSection" element={<AttendanceSection />}/>    
          <Route path="/admin/timetableSection" element={<TimetableSection />}/>      
          <Route path="/admin/settingSection" element={<SettingSection />}/>      
          <Route path="/admin/reportCardSection" element={<ReportCardSection />}/>   