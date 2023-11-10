import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { logged } = React.useContext(UserContext);

  if (logged) <Navigate to="/"></Navigate>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        <Route path="criar" element={<LoginCreate></LoginCreate>}></Route>
        <Route path="perdeu" element={<LostPassword></LostPassword>}></Route>
        <Route path="resetar" element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
    </div>
  );
};

export default Login;
