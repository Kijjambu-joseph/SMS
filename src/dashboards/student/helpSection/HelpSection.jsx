import StudentSideBar from "/src/dashboards/student/StudentSideBar.jsx";
import Header from "/src/Header.jsx";
import ResponsiveHeader from "/src/ResponsiveHeader.jsx";
import StudentCards from "/src/dashboards/student/StudentCards.jsx";
// import Charts from "./Charts";

function HelpSection() {
  return (
    <div className="w-full flex gap-2 fixed">
            <StudentSideBar/>
             
            <div className=" w-80/100 flex flex-col  admin-overview" >
                <Header/>
                <ResponsiveHeader/>
                 
                <div className="admin-body-container w-98/100 ">
                    {/* <StudentCards/> */}

                    <div>
                      <h1>Help Section</h1>
                      {/* <Body/> */}
                    </div>
                </div>
                
            </div>
        </div>
  );
}

export default HelpSection;