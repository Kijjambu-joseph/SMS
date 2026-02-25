import { useState } from 'react';
import './Body.css';
import StudentRegistration from '/src/auth/StudentRegistration.jsx';
import TeacherRegistration from '/src/auth/TeacherRegistration.jsx';
import LoginForm from '/src/auth/Login.jsx'
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function Body (){

  const [openForm, setOpenForm] = useState(null);
  // const [closeForm, setCloseForm] = useState(null);

  const handleForm = {
    studentForm: <StudentRegistration onClose ={ () => {setOpenForm(null)}} />,
    teacherForm: <TeacherRegistration />,
    timeTable: <LoginForm />
  }
  
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
            <button onClick={() => setOpenForm("studentForm")}> Add New Student</button> 
            </div>

            <div className="Admin-buttons">
              <button onClick={() => setOpenForm("teacherForm")}>Add New Teacher</button>
            </div>

            <div className="Admin-btn002">
              <button onClick={() => setOpenForm("timeTable")}>View Timetable</button>
            </div>
          </div>

          <ReactModal
              isOpen={openForm}
              onRequestClose={() => {
                console.log("clicked");
                setOpenForm(null)
              }}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{

                overlay: {
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                content: {
                  position: "relative",
                  inset: "unset",
                  width: "95%",
                  maxWidth: "100%",
                  maxHeight: "95vh",
                  overflowY: "auto",
                  padding: "20px",
                  borderRadius: "12px"
                }
              }}
          >
            {openForm && handleForm[openForm]}
          </ReactModal>
        </div>
      )
}
export default Body;