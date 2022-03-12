import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated 
  ?  // si el user esta autenticado
    children
  : 
    <Navigate to={"/login"} />
  
};

export default PrivateRoute;
