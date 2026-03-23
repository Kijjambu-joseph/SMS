import { useState } from "react";
import { useNavigate } from "react-router-dom";


function TestLogin(){
   const [role, setRole] = useState('')
   const navigate = useNavigate()

   const roles = (roleList) =>{
        if(roleList === 'Admin'){
            alert('Loging in as an Admin');
            setRole('Admin');
            localStorage.setItem('newRole', 'Admin');
            navigate('/admin');
        }else if(roleList === 'Teacher'){
            alert('Loging in as a Teacher');
            setRole('Teacher');
            localStorage.setItem('newRole', 'Teacher');
            navigate('/teacher')
        }else if(roleList === 'Student'){
            alert('Loging in as a Student');
            setRole('Student')
            localStorage.setItem('newRole', 'Student');
            navigate('/student')
        }else{
            alert('No Role found')
        }
   }


  

   
    return(
        <div class="login-test-btn">
            <button onClick={()=> roles('Admin')}>Admin</button>
            <button onClick={()=> roles('Teacher')}>Teacher</button>
            <button onClick={()=> roles('Student')}>Student</button>
        </div>
    );
}
export default TestLogin