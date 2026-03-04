import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("user" || null);

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
