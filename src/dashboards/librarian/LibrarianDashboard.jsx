import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import FrontBanner from "./FrontBanner";
import LibrarianCards from "./LibrarianCards";
import MyBarChart from "./MyBarChart";


 function LibririanDashboard(){
    return(

            <div>
                <Header/>
                <div style={{display:"flex"}}>
                    <SideBar/>
                   <div className=" Detailsview">
                        <FrontBanner/>
                        <LibrarianCards/>
                        <MyBarChart/>
                   </div>
                </div>
            </div>
            
    )
}
export default LibririanDashboard;