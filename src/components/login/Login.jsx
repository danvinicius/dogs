import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import { UserContext } from "../../context/UserContext";
import styles from "./Login.module.scss";
import NotFound from "../layout/NotFound";

const Login = () => {
  const { logged } = React.useContext(UserContext);

  if (logged) <Navigate to="/user" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginLostPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
