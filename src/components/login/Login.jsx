import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import { UserContext } from "../../context/UserContext";
import styles from './Login.module.scss';

const Login = () => {
  const { logged } = React.useContext(UserContext);

  if (logged) <Navigate to="/user"/>;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="criar" element={<LoginCreate/>}/>
        <Route path="perdeu" element={<LostPassword/>}/>
        <Route path="resetar" element={<ResetPassword/>}/>
      </Routes>
      </div>
    </section>
  );
};

export default Login;
