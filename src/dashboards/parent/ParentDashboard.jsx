import React from "react";

import Sidebar from "./sidebar.jsx";

function ParentDashboard() {
    return(
        <div className="w-full h-auto p-8 bg-gray-100">
            <Sidebar />
        </div>
    );
}

export default ParentDashboard;