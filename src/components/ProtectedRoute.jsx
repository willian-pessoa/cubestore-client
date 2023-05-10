import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isLoged,
  redirectPath = "/login",
  children,
  role = [],
  userRole,
}) => {
  const haveRole = role.some((role) => role === userRole);
  if (!isLoged || !haveRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
