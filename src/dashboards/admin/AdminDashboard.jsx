import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import AdminCards from "./AdminCards";
import Body from "./Body";






function AdminDashboard (){
    return(
        <div>
            <Header/>
            <div className="admin-overview">
                <SideBar/>

                <div>
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