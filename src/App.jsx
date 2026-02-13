import React from "react";
import StudentDashboard from "./dashboards/student/StudentDashboard";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Libriarian from "./dashboards/librarian/LibrarianDashboard";
import LoginForm from "/src/auth/Login.jsx"
import StudentRegistration from '/src/auth/StudentRegistration.jsx'
import TeacherRegistration from "/src/auth/TeacherRegistration.jsx"
import ParentDashboard from "/src/dashboards/parent/ParentDashboard.jsx"
import AdminDashboard from "/src/dashboards/admin/AdminDashboard.jsx"
import ForgotPassword from "/src/auth/ForgotPassword.jsx"
import ResetPassword from "/src/auth/ResetPassword.jsx"


function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>
          <Route path="/" element={< LoginForm />} />
          <Route path="/student" element={<StudentDashboard />}/>
          <Route path="/librarian" element={<Libriarian />} />
          <Route path="/student/Reg" element={<StudentRegistration />} />
          <Route path="/teachersReg" element={<TeacherRegistration />} />
          <Route path="/parent" element={<ParentDashboard />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/RequestToken" element={<ForgotPassword />}/>
          <Route path="/resetPassword" element={<ResetPassword />}/>
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
