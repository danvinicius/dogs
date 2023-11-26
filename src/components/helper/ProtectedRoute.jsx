import React from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { logged } = React.useContext(UserContext);
  return logged ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
