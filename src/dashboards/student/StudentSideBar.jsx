import { useState } from 'react';
import SideBar from '/src/SideBar.jsx'
import StudentNavigation from '/src/dashboards/student/StudentNavigation.jsx'

function StudentSideBar() {
    const [role, setRole] = useState("Student");
    return(
        < SideBar role={role} navigation={<StudentNavigation/>}/>
    );
}

export default StudentSideBar;