import React from "react";
import './TeacherCards.css';
import Card from "/src/dashboards/admin/Card.jsx";


function TeacherCards (){
   return(
               <div className="admin-container">
                   <Card icon={<i class="fa-solid fa-people-group" id="admin-icon-student"></i>} tittle="Total Students" value={TotalStudents} />
                   <Card icon={<i class="fa-solid fa-chalkboard-user" id="admin-icons-teachers"></i>} tittle="Total Teachers" value={TotalTeachers} />
                   <Card icon={<i class="fa-solid fa-building-columns" id="admin-icons-classes"></i>} tittle="Total Classes" value={TotalClasses}/>
                   <Card icon={<i class="fa-solid fa-clipboard-user" id="admin-icons-rate"></i>} tittle="Attendance Rate (%)" value= {AttendanceRate}/>
               </div>
       )
   }

export default TeacherCards;