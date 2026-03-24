import { useState } from 'react';
import SideBar from '/src/SideBar.jsx'
import StudentNavigation from '/src/dashboards/student/StudentNavigation.jsx'

function StudentSideBar() {
    const studentData = localStorage.getItem('user');
    const studentRole = studentData ? JSON.parse(studentData) : null
    const [role, setRole] = useState(studentRole?.userRole || "");
    return(
        < SideBar role={role} navigation={<StudentNavigation/>}/>
    );
}

export default StudentSideBar;