import React from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { logged } = React.useContext(UserContext);
  return logged ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProtectedRoute;
