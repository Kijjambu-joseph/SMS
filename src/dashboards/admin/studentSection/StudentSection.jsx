
import Header from "/src/Header.jsx";
// import SideBar from "./SideBar";
// import AdminCards from "/src/dashboards/admin/adminCards/AdminCards.jsx";
import ResponsiveHeader from "/src/ResponsiveHeader.jsx";
import StudentBody from "/src/dashboards/admin/studentSection/StudentBody.jsx";
import '/src/dashboards/admin/Card.css';
import AdminSidebar from "/src/dashboards/admin/AdminSidebar.jsx";






function StudentSection (){
    return(
        <div className="w-full flex gap-2 fixed">
            <AdminSidebar/>
             
            <div className=" w-80/100 flex flex-col  admin-overview" >
                <Header/>
                <ResponsiveHeader/>
                 
                <div className="admin-body-container w-98/100 ">
                    {/* <AdminCards/> */}

                    <div>
                      <StudentBody/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default StudentSection;