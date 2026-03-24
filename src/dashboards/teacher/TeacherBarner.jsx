import { useState } from 'react';
import Barner from '/src/Barner.jsx'

function TeacherBarner(){
    const teacherData = localStorage.getItem('user');
    const teacherName = teacherData ? JSON.parse(teacherData): null;
    const [name, setName] = useState(teacherName?.userName || "")
    return(
        <div>
            <Barner userName={name} wecomingText="Your presence strengthens our community. Together, we foster an environment of curiosity and character for every student."/>
        </div>
    )
}

export default TeacherBarner;