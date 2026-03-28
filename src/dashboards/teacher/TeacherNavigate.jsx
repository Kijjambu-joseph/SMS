import '/src/SideBar.css'
import Navigation from '/src/Navigation.jsx'

function TeacherNavigation(){
    return(
        <div>
            <Navigation to="/teacher" end={true} NavIcon={<i class="fa-solid fa-house-user" id="admin-icon-side"></i>} NavName="Dashboard" />
            <Navigation to="/teacher/attendance" NavIcon={<i class="fa-solid fa-calendar-check" id="admin-icon-side"></i>} NavName="Attendance"/>
            <Navigation to="/teacher/student" NavIcon={<i class="fa-solid fa-users" id="admin-icon-side"></i>} NavName="Students"/>
            <Navigation to="/teacher/timetable" NavIcon={<i class="fa-solid fa-table" id="admin-icon-side"></i>} NavName="Time Table"/>
            <Navigation to="/teacher/marks" NavIcon={<i class="fa-solid fa-marker" id="admin-icon-side"></i>} NavName="Marks"/>
            <Navigation to='/admin/reportCard' NavIcon={<i class="fa-solid fa-file-alt" id="admin-icon-side"></i>} NavName="Report Cards"/>
            <Navigation to='/admin/setting' NavIcon={<i class="fa-solid fa-cog" id="admin-icon-side"></i>} NavName="Settings"/>
        </div>
    )
}

export default TeacherNavigation;