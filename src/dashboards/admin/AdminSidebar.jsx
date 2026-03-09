import '/src/SideBar.css';

import SideBar from "./SideBar";
import { useState } from "react";
import AdminNavigation from "/src/dashboards/admin/adminNavigate/AdminNavigation.jsx";

function AdminSidebar(){
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
        <SideBar role={role} navigation={<AdminNavigation />} />
    );
}

export default AdminSidebar;