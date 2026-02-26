import Navigation from '/src/Navigation.jsx'

function StudentNavigation(){
    return(
            <div>
                <Navigation to="/student" NavIcon={<i class="fa-solid fa-house-user" id="admin-icon-side"></i>} NavName="Dashboard" />
                <Navigation to='/myMarks' NavIcon={<i class="fa-solid fa-marker" id="admin-icon-side"></i>} NavName="Marks"/>
                <Navigation to='/myAttendance' NavIcon={<i class="fa-solid fa-clipboard-user"></i>} NavName="Attendance"/>
                <Navigation to='/myMessages' NavIcon={<i class="fa-solid fa-comment-sms"></i>} NavName="Messages"/>
                <Navigation to='/myTimeTable' NavIcon={<i class="fa-solid fa-table" id="admin-icon-side"></i>} NavName="Timetables"/>
                <Navigation to='/mySchedule' NavIcon={<i class="fa-solid fa-calendar-check" id="admin-icon-side"></i>} NavName="Event Schedules"/>
                <Navigation to='/myHelp' NavIcon={<i class="fa-solid fa-person-circle-question"></i>} NavName="Help"/>
                <Navigation to='/mySettings' NavIcon={<i class="fa-solid fa-cog" id="admin-icon-side"></i>} NavName="Settings"/>
            </div>
    );
}

export default StudentNavigation;