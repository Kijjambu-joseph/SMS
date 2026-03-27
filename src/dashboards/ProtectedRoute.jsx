import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children, allowedRoles }) {
   const navigate = useNavigate();

  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;
  if(!user){
   return <Navigate to="/testLogin" replace />;
  }

  if(allowedRoles && !allowedRoles.includes(user.userRole)){
    return <Navigate to="/" replace />;
  }
  return (children)
}

export default ProtectedRoute
