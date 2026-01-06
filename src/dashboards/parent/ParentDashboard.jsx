import React from "react";

import Sidebar from "./sidebar.jsx";
import Header from "./header.jsx";
import ParentBody from "./ParentBody.jsx"

function ParentDashboard() {
    return(
        <div className="w-full h-screen p-8 bg-gray-600 flex m-t-10">
            <Sidebar />
            <div className="w-80/100 h-full flex flex-col bg-red-100">
                <Header />
                <ParentBody />

            </div>
        </div>
    );
}

export default ParentDashboard;