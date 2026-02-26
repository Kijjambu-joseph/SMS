import React from "react";
import '/src/dashboards/admin/adminCards/AdminCards.css';
import { useState } from "react";
import Card from '/src/dashboards/admin/Card.jsx';

function StudentCards (){
    const [attendance, setAttendance] = useState(0);
    const [assignments, setAssignments] = useState(0)
    const [grade, setGrade] = useState(0)
    const [feesBalance, setFeesBalance] = useState(0)



    return(
            <div className="admin-container">
                <Card icon={<i class="fa-solid fa-people-group" id="admin-icon-student"></i>} tittle="Attendance Rate (%)" value={attendance} />
                <Card icon={<i class="fa-solid fa-chalkboard-user" id="admin-icons-teachers"></i>} tittle="Assignments Done" value={assignments} />
                <Card icon={<i class="fa-solid fa-building-columns" id="admin-icons-classes"></i>} tittle="Average Grade" value={grade}/>
                <Card icon={<i class="fa-solid fa-clipboard-user" id="admin-icons-rate"></i>} tittle="Fees Balance (UGX)" value= {feesBalance}/>
            </div>
    )
}
export default StudentCards;