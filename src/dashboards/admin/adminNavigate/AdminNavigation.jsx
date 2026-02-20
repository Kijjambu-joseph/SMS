import '/src/dashboards/admin/SideBar.css'
import Navigation from '/src/Navigation.jsx'

function AdminNavigation(){
    return(
        <div>
            <Navigation NavIcon={<i class="fa-solid fa-house-user" id="admin-icon-side"></i>} NavName="Dashboard"/>
            <Navigation NavIcon={<i class="fa-solid fa-users" id="admin-icon-side"></i>} NavName="Students"/>
            <Navigation NavIcon={<i class="fa-solid fa-person-chalkboard" id="admin-icon-side"></i>} NavName="Teachers"/>
            <Navigation NavIcon={<i class="fa-solid fa-school" id="admin-icon-side"></i>} NavName="Classes"/>
            <Navigation NavIcon={<i class="fa-solid fa-marker" id="admin-icon-side"></i>} NavName="Marks"/>
            <Navigation NavIcon={<i class="fa-solid fa-calendar-check" id="admin-icon-side"></i>} NavName="Attendance"/>
            <Navigation NavIcon={<i class="fa-solid fa-table" id="admin-icon-side"></i>} NavName="Time Table"/>
            <Navigation NavIcon={<i class="fa-solid fa-file-alt" id="admin-icon-side"></i>} NavName="Report Cards"/>
            <Navigation NavIcon={<i class="fa-solid fa-cog" id="admin-icon-side"></i>} NavName="Settings"/>
            

        </div>
    )
}

export default AdminNavigation;