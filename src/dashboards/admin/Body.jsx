import React from "react";
import './Body.css';

function Body (){
      return(
        <div className="Body-container">

          <div className="Admin-activities">
            <h1>Recent Activities</h1>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
              <h2>New student enrolled</h2>
              <p>2 hours ago</p>
            </div>
            <hr />
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
              <h2>Grade Submitted for Math 101 </h2>
              <p>1 day ago</p>
            </div>
            <hr />
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
              <h2>Attendance Marked for Today</h2>
              <p>6 hours ago</p>
            </div>
            <hr />
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
              <h2>Teacher Assigned</h2>
              <p>3 hours ago</p>
            </div>
            <hr />
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
              <h2>New Annoucement posted</h2>
              <p>5 days ago</p>
            </div>
            <hr />
          </div>

          <div className="Admin-actions">
            <h1>Quick Actions</h1>
            <div className="Admin-btn001">
              <button >Add New Student</button>
            </div>

            <div className="Admin-buttons">
              <button>Add New Teacher</button>
            </div>

            <div className="Admin-btn002">
              <button >View Timetable</button>
            </div>
          </div>
        </div>
      )
}
export default Body;