import '/src/SideBar.css';

import SideBar from "/src/SideBar.jsx";
import { useState } from "react";
import AdminNavigation from "/src/dashboards/admin/adminNavigate/AdminNavigation.jsx";

function AdminSidebar(){
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null
    const [role, setRole] = useState(user?.userRole || "")

    // const handleRoleChange = async () => {
    //     try{
    //         const response = await fetch("/api/user/role");
    //         setRole(response.data);
    //         } catch (error) {
    //     console.error("Error fetching user role:", error);
    // }
    //     }
    

    return(
        <SideBar role={role} navigation={<AdminNavigation />} />
    );
}

export default AdminSidebar;