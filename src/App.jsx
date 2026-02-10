import React from "react";
import StudentDashboard from "./dashboards/student/StudentDashboard";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Libriarian from "./dashboards/librarian/LibrarianDashboard";
import LoginForm from "/src/auth/Login.jsx"
import StudentRegistration from '/src/auth/StudentRegistration.jsx'
import TeacherRegistration from "/src/auth/TeacherRegistration.jsx"
import ParentDashboard from "/src/dashboards/parent/ParentDashboard.jsx"
import AdminDashboard from "/src/dashboards/admin/AdminDashboard.jsx"


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
          <Route path="/parent" element={<ParentDashboard />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
