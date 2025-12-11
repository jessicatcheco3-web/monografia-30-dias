import React from "react";
import { useAuth } from "@/auth/AuthContext";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactElement;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { auth } = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
