import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import AdminCards from "/src/dashboards/admin/adminCards/AdminCards.jsx";
import ResponsiveHeader from "./ResponsiveHeader";
import Body from "./Body";
import './Body.css';






function AdminDashboard (){
    return(
        <div className="w-full flex gap-2 fixed">
            <SideBar/>
             
            <div className=" w-80/100 flex flex-col  admin-overview">
                <Header/>
                <ResponsiveHeader/>
                 
                <div className="admin-body-container w-98/100 ">
                    <AdminCards/>

                    <div>
                      <Body/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default AdminDashboard;