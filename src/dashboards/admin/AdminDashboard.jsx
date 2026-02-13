import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import AdminCards from "./AdminCards";
import Body from "./Body";
import './Body.css';






function AdminDashboard (){
    return(
        <div className="w-full">
            <Header/>
            <div className=" w-full admin-overview">
                <SideBar/>

                <div className="admin-body-container">
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