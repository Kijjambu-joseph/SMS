import React from "react";
import Header from "/src/Header";
// import SideBar from "./SideBar";
import AdminCards from "/src/dashboards/admin/adminCards/AdminCards.jsx";
import ResponsiveHeader from "/src/ResponsiveHeader.jsx";
import Body from "./Body";
import './Body.css';
import TeacherSidebar from "/src/dashboards/teacher/TeacherSideBar.jsx";
import TeacherBarner from '/src/dashboards/teacher/TeacherBarner.jsx'






function TeacherDashboard (){
    return(
        <div className="w-full flex gap-2 fixed">
            <TeacherSidebar/>
             
            <div className=" w-80/100 flex flex-col  admin-overview" >
                <Header/>
                <ResponsiveHeader/>
                 
                <div className="admin-body-container w-98/100 ">
                    <TeacherBarner/>
                    <AdminCards/>

                    <div>
                      <Body/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default TeacherDashboard;