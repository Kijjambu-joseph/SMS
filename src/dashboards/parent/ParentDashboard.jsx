import React from "react";

import Sidebar from "./sidebar.jsx";
import Header from "./header.jsx";

function ParentDashboard() {
    return(
        <div className="w-full h-screen p-8 bg-gray-600 flex">
            <Sidebar />
            <div className="w-80/100 h-10/100 bg-green-400">
                <Header />
            </div>
        </div>
    );
}

export default ParentDashboard;