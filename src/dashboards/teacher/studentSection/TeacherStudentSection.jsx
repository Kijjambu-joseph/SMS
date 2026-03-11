import Header from "/src/Header";
// import SideBar from "./SideBar";
import ResponsiveHeader from "/src/ResponsiveHeader.jsx";
import  StudentBody from "/src/dashboards/teacher/studentSection/StudentBody.jsx";
import TeacherSidebar from "/src/dashboards/teacher/TeacherSideBar.jsx";






function TeacherStudentSection (){
    return(
        <div className="w-full flex gap-2 fixed">
            <TeacherSidebar/>
             
            <div className=" w-80/100 flex flex-col  admin-overview" >
                <Header/>
                <ResponsiveHeader/>
                 
                <div className="admin-body-container w-98/100 ">
                   

                    <div>
                      < StudentBody/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default TeacherStudentSection;