
import Header from "/src/Header.jsx";
// import SideBar from "./SideBar";
// import AdminCards from "/src/dashboards/admin/adminCards/AdminCards.jsx";
import ResponsiveHeader from "/src/ResponsiveHeader.jsx";
import Body from "/src/dashboards/admin/Body.jsx";
import '/src/dashboards/admin/Card.css';
import AdminSidebar from "/src/dashboards/admin/AdminSidebar.jsx";






function SettingSection (){
    return(
        <div className="w-full flex gap-2 fixed">
            <AdminSidebar/>
             
            <div className=" w-80/100 flex flex-col  admin-overview" >
                <Header/>
                <ResponsiveHeader/>
                 
                <div className="admin-body-container w-98/100 ">
                    {/* <AdminCards/> */}

                    <div>
                      {/* <Body/> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default SettingSection;