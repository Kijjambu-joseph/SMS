import React from "react";
import '/src/SideBar.css'
import StudentDashboard from "./dashboards/student/StudentDashboard";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Libriarian from "./dashboards/librarian/LibrarianDashboard";
import LoginForm from "/src/auth/Login.jsx"
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
import ReportCardSection from "/src/dashboards/admin/reportCardSection/ReportCardSection.jsx";


// TESTING PATH
import ClassRegForm from '/src/dashboards/admin/classSection/ClassRegForm.jsx'
import TeacherDashboard from "/src/dashboards/teacher/TeacherDashboard.jsx";

// STUDENT DASHBOARD IMPORTS
import MarkSection from '/src/dashboards/student/marksSection/MarksSection.jsx'
import AttendSection from '/src/dashboards/student/attendanceSection/AttendSection.jsx'
import MessageSection from '/src/dashboards/student/messageSection/MessageSection.jsx'
import TimeTableSection from '/src/dashboards/student/timeTableSection/TimeTableSection.jsx'
import ScheduleSection from '/src/dashboards/student/scheduleSection/ScheduleSection.jsx'
import HelpSection from "/src/dashboards/student/helpSection/HelpSection.jsx";
import SettingsSection from '/src/dashboards/student/SettingsSection/SettingsSection.jsx'

// TEACHER DASHBOARD IMPORTS
import TeacherAttendanceSection from '/src/dashboards/teacher/AttendanceSection/TeacherAttendanceSection.jsx'
import TeacherMarksSectionSection from '/src/dashboards/teacher/marksSection/TeacherMarksSection.jsx'


function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>

        {/* Test Route */}

        <Route path="/classReg" element={<ClassRegForm />} />
        <Route path="/Teacher" element={<TeacherDashboard />} />

          <Route path="/" element={< LoginForm />} />
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

          {/*TEACHER SECTION ROUTE PATHS  */}
          <Route path="/teacherAttendance" element={<TeacherAttendanceSection />}/>
          <Route path="/teacherMarks" element={<TeacherMarksSectionSection />}/>

          {/*STUDENT SECTION ROUTE PATHS  */}
          <Route path="/myMarks" element={<MarkSection />}/>   
          <Route path="/myAttendance" element={<AttendSection />}/>
          <Route path="/myMessages" element={<MessageSection />}/>
          <Route path="/myTimeTable" element={<TimeTableSection />}/>
          <Route path="/mySchedule" element={<ScheduleSection />}/>
          <Route path="/mySettings" element={<SettingsSection />}/>
          <Route path="/myHelp" element={<HelpSection />}/>
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
