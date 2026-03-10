import '/src/SideBar.css';

import SideBar from "/src/SideBar.jsx";
import { useState } from "react";
import TeacherNavigation from "/src/dashboards/teacher/TeacherNavigate.jsx";

function TeacherSidebar(){
    const [role, setRole] = useState("User");

    const handleRoleChange = async () => {
        try{
            const response = await fetch("/api/user/role");
            setRole(response.data);
            } catch (error) {
        console.error("Error fetching user role:", error);
    }
        }
    

    return(
        <SideBar role={role} navigation={<TeacherNavigation />} />
    );
}

export default TeacherSidebar;