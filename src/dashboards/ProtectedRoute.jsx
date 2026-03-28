import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ allowedRoles }) {
   
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;
  if(!user){
   return <Navigate to="/testLogin" />;
  }

  if(allowedRoles && !allowedRoles.includes(user.userRole)){
    return <Navigate to="/" />;
  }
  return <Outlet/>;
}

export default ProtectedRoute
