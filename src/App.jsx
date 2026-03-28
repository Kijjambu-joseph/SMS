import React from "react";
import '/src/SideBar.css'
import { Routes,Route,BrowserRouter} from "react-router-dom";

import ProtectedRoute from "/src/dashboards/ProtectedRoute.jsx";




import Libriarian from "./dashboards/librarian/LibrarianDashboard";
import ParentDashboard from "/src/dashboards/parent/ParentDashboard.jsx"

import LoginForm from "/src/auth/Login.jsx"
import ForgotPassword from "/src/auth/ForgotPassword.jsx"
import ResetPassword from "/src/auth/ResetPassword.jsx"


// ADMIN
import AdminDashboard from "/src/dashboards/admin/AdminDashboard.jsx"
import StudentSection from "/src/dashboards/admin/studentSection/StudentSection.jsx"
import TeacherSection from "/src/dashboards/admin/teacherSection/TeacherSection.jsx"
import ClassSection from "/src/dashboards/admin/classSection/ClassSection.jsx"
import MarksSection from "/src/dashboards/admin/marksSection/MarksSection.jsx"
import AttendanceSection from "/src/dashboards/admin/attendanceSection/AttendanceSection.jsx"
import TimetableSection from "/src/dashboards/admin/timetableSection/TimetableSection.jsx"
import SettingSection from "/src/dashboards/admin/settingSection/SettingSection.jsx"
import ReportCardSection from "/src/dashboards/admin/reportCardSection/ReportCardSection.jsx";
import ClassRegForm from '/src/dashboards/admin/classSection/ClassRegForm.jsx'

// TEACHER// TEACHER DASHBOARD IMPORTS
import TeacherDashboard from "/src/dashboards/teacher/TeacherDashboard.jsx";
import TeacherAttendanceSection from '/src/dashboards/teacher/AttendanceSection/TeacherAttendanceSection.jsx'
import TeacherMarksSectionSection from '/src/dashboards/teacher/marksSection/TeacherMarksSection.jsx'
import TeacherStudentSection from '/src/dashboards/teacher/studentSection/TeacherStudentSection.jsx'
import TeacherTimetableSection from '/src/dashboards/teacher/timeTableSection/TeacherTimetableSection.jsx'


// TESTING PATH
import TestLogin from '/src/TestLogin.jsx'

// STUDENT DASHBOARD IMPORTS
import StudentDashboard from "./dashboards/student/StudentDashboard";
import MarkSection from '/src/dashboards/student/marksSection/MarksSection.jsx'
import AttendSection from '/src/dashboards/student/attendanceSection/AttendSection.jsx'
import MessageSection from '/src/dashboards/student/messageSection/MessageSection.jsx'
import TimeTableSection from '/src/dashboards/student/timeTableSection/TimeTableSection.jsx'
import ScheduleSection from '/src/dashboards/student/scheduleSection/ScheduleSection.jsx'
import HelpSection from "/src/dashboards/student/helpSection/HelpSection.jsx";
import SettingsSection from '/src/dashboards/student/SettingsSection/SettingsSection.jsx'




function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>

        {/* TESTING COMPONENTS */}
        <Route path="/classReg" element={<ClassRegForm />} />
        <Route path="/TestLogin" element={<TestLogin />} />

        {/* OPEN PATHS FOR ALL TO ACCESS */}
        <Route path="/" element={< LoginForm />} />


        {/* PROTECTED PATH FOR ADMIN ACCESS ONLY */}
        <Route element={<ProtectedRoute allowedRoles={['Admin']}/>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/student" element={<StudentSection />} />
          <Route path="/admin/teacher" element={<TeacherSection />} />
          <Route path="/admin/class" element={<ClassSection />} />
          <Route path="/admin/marks" element={<MarksSection />} />
          <Route path="/admin/attendance" element={<AttendanceSection />} />
          <Route path="/admin/timetable" element={<TimetableSection />} />
          <Route path="/admin/settings" element={<SettingSection />} />
          <Route path="/admin/report-card" element={<ReportCardSection />} />
        </Route>


        {/* PROTECTED PATH FOR TEACHERS ACCESS ONLY */}
        <Route element={<ProtectedRoute allowedRoles={['Teacher']}/>}>
          <Route path="teacher" element={<TeacherDashboard/>}/>
          <Route path="teacher/attendance" element={<TeacherAttendanceSection/>}/>
          <Route path="/teacher/marksSection" element={<TeacherMarksSectionSection />}/>
          <Route path="/teacher/studentSection" element={<TeacherStudentSection />}/>
          <Route path="/teacher/timetableSection" element={<TeacherTimetableSection />}/>
        </Route>


        {/* PROTECTED PATH FOR STUDENTS ACCESS ONLY */}
        <Route element={<ProtectedRoute allowedRoles={['Student']}/>}>
          <Route path="/student" element={<MarkSection />}/>
          <Route path="/myMarks" element={<MarkSection />}/>   
          <Route path="/myAttendance" element={<AttendSection />}/>
          <Route path="/myMessages" element={<MessageSection />}/>
          <Route path="/myTimeTable" element={<TimeTableSection />}/>
          <Route path="/mySchedule" element={<ScheduleSection />}/>
          <Route path="/mySettings" element={<SettingsSection />}/>
          <Route path="/myHelp" element={<HelpSection />}/>
        </Route>


        
        
        
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
