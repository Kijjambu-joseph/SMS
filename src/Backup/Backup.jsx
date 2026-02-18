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
