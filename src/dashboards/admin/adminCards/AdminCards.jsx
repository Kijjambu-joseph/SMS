import '/src/dashboards/admin/adminCards/AdminCards.css';
import { useState, useEffect} from "react";
import Card from '/src/dashboards/admin/Card.jsx';
import axios from "axios";

function AdminCards (){
    const [TotalStudents, setTotalStudents] = useState(0);
    const [TotalTeachers, setTotalTeachers] = useState(0)
    const [TotalClasses, setTotalClasses] = useState(0)
    const [AttendanceRate, setAttendanceRate] = useState(0)
    const [loading, setLoading] = useState(false)

    const fetchCardData = async () =>{
        try{
            setLoading(true);
            const response = await axios.get("/api/admin/dashboardData");
            setTotalStudents(response.data.totalStudents);
            setTotalTeachers(response.data.totalTeachers);
            setTotalClasses(response.data.totalClasses);
            setAttendanceRate(response.data.attendanceRate);

            await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (error){
            console.error("Error fetching dashboard data:", error);
        } finally {
            setLoading(false);
        }
    }

    

    useEffect(() => {
        fetchCardData();
    }, []);


    if(loading) return (
        <div className="fixed inset-0  flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <p className="text-blue-600 font-semibold">Loading...</p>
          </div>
      </div>
    );

    return(
            <div className="admin-container">
                <Card icon={<i class="fa-solid fa-people-group" id="admin-icon-student"></i>} tittle="Total Students" value={TotalStudents} />
                <Card icon={<i class="fa-solid fa-chalkboard-user" id="admin-icons-teachers"></i>} tittle="Total Teachers" value={TotalTeachers} />
                <Card icon={<i class="fa-solid fa-building-columns" id="admin-icons-classes"></i>} tittle="Total Classes" value={TotalClasses}/>
                <Card icon={<i class="fa-solid fa-clipboard-user" id="admin-icons-rate"></i>} tittle="Attendance Rate (%)" value= {AttendanceRate}/>
            </div>
    )
}
export default AdminCards;