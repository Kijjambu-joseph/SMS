import '/src/dashboards/admin/SideBar.css'

import SideBar from "./SideBar";
import { useState } from "react";
import AdminNavigation from "/src/dashboards/admin/adminNavigate/AdminNavigation.jsx";

function AdminSidebar(){
    const [role, setRole] = useState("Admin");
    return(
        <SideBar role={role} navigation={<AdminNavigation />} />
    );
}

export default AdminSidebar;