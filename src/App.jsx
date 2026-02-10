import React from "react";
import StudentDashboard from "./dashboards/student/StudentDashboard";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Libriarian from "./dashboards/librarian/LibrarianDashboard";
import LoginForm from "/src/auth/Login.jsx"
import StudentRegistration from '/src/auth/StudentRegistration.jsx'
import TeacherRegistration from "/src/auth/TeacherRegistration.jsx"
import AdminDashboard from "./dashboards/admin/AdminDashboard";
import TeacherDashboard from "./dashboards/teacher/TeacherDashboard";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";



function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>
          <Route path="/student" element={<StudentDashboard />}/>
          <Route path="/librarian" element={<Libriarian />} />
          <Route path="/login" element={< LoginForm />} />
          <Route path="/student/Reg" element={<StudentRegistration />} />
          <Route path="/teachers/Reg" element={<TeacherRegistration />} />
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/teacher" element={<TeacherDashboard/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
  
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
