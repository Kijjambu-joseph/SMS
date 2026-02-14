import React from "react";
import Header from "/src/dashboards/admin/Header.jsx";
import SideBar from "/src/dashboards/admin/teacherSection/SideBar.jsx";

function TeacherSection (){
    return(
        <div className="w-full">
            <Header/>
            <div className=" w-full admin-overview">
                <SideBar/>

                {/* <div className="admin-body-container">
                    <AdminCards/>

                    <div>
                      <Body/>
                    </div>
                </div> */}
                
            </div>
        </div>
    )
}
export default TeacherSection;