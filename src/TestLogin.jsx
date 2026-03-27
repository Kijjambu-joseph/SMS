import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/src/SideBar.css'


function TestLogin(){

   const navigate = useNavigate();


  const [user, setUser] = useState({userName:'', userRole:''})

  const handleLogin = (userName, userRole) =>{
    const newUser = {userName, userRole}
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))

    if(newUser.userRole === 'Admin'){
      navigate('/admin')
    }else if(newUser.userRole === 'Teacher'){
      navigate('/teacher')
    }else if(newUser.userRole === 'Student'){
      navigate('/student')
    }else{
      alert('No role found')
    }
  }




    return(
        <div class="login-test-btn">
            <button onClick={()=> handleLogin('Pasikali', 'Admin')}>Admin Login</button>
            <button onClick={()=> handleLogin('Joseph','Teacher')}>Teacher Login</button>
            <button onClick={()=> handleLogin('Hassan','Student')}>Student Login</button>
        </div>
    );
}
export default TestLogin