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
import StudentSection from "/src/dashboards/admin/studentSection/StudentSection.jsx"
import TeacherSection from "/src/dashboards/admin/teacherSection/TeacherSection.jsx"
import ClassSection from "/src/dashboards/admin/classSection/ClassSection.jsx"
import MarksSection from "/src/dashboards/admin/marksSection/MarksSection.jsx"
import AttendanceSection from "/src/dashboards/admin/attendanceSection/AttendanceSection.jsx"
import TimetableSection from "/src/dashboards/admin/timetableSection/TimetableSection.jsx"
import SettingSection from "/src/dashboards/admin/settingSection/SettingSection.jsx"


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
          <Route path="/admin/studentSection" element={<StudentSection />}/>
          <Route path="/admin/teacherSection" element={<TeacherSection />}/>
          <Route path="/admin/classSection" element={<ClassSection />}/>
          <Route path="/RequestToken" element={<ForgotPassword />}/>
          <Route path="/resetPassword" element={<ResetPassword />}/>
          <Route path="/admin/marksSection" element={<MarksSection />}/>
          <Route path="/admin/attendanceSection" element={<AttendanceSection />}/>    
          <Route path="/admin/timetableSection" element={<TimetableSection />}/>      
          <Route path="/admin/settingSection" element={<SettingSection />}/>      
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
