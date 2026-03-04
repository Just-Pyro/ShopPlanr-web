import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuth = localStorage.getItem("user" || null);

  if (isAuth) {
    return <Navigate to="/list" replace />;
  }

  return children;
};

export default PublicRoute;
