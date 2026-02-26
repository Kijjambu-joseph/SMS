import '/src/SideBar.css'
import Navigation from '/src/Navigation.jsx'

function AdminNavigation(){
    return(
        <div>
            <Navigation to="/admin" NavIcon={<i class="fa-solid fa-house-user" id="admin-icon-side"></i>} NavName="Dashboard" />
            <Navigation to='/admin/studentSection' NavIcon={<i class="fa-solid fa-users" id="admin-icon-side"></i>} NavName="Students"/>
            <Navigation to='/admin/teacherSection' NavIcon={<i class="fa-solid fa-person-chalkboard" id="admin-icon-side"></i>} NavName="Teachers"/>
            <Navigation to='/admin/classSection' NavIcon={<i class="fa-solid fa-school" id="admin-icon-side"></i>} NavName="Classes"/>
            <Navigation to='/admin/marksSection' NavIcon={<i class="fa-solid fa-marker" id="admin-icon-side"></i>} NavName="Marks"/>
            <Navigation to='/admin/attendanceSection' NavIcon={<i class="fa-solid fa-calendar-check" id="admin-icon-side"></i>} NavName="Attendance"/>
            <Navigation to='/admin/timeTableSection' NavIcon={<i class="fa-solid fa-table" id="admin-icon-side"></i>} NavName="Time Table"/>
            <Navigation to='/admin/reportCardSection' NavIcon={<i class="fa-solid fa-file-alt" id="admin-icon-side"></i>} NavName="Report Cards"/>
            <Navigation to='/admin/settingSection' NavIcon={<i class="fa-solid fa-cog" id="admin-icon-side"></i>} NavName="Settings"/>
            

        </div>
    )
}

export default AdminNavigation;