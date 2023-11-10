import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../../context/UserContext";
import React from "react";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs></Dogs>
        </Link>
        {data ? (
          <div>
            <Link className={styles.login} to="/conta">
              {data.nome}
            </Link>
            <button onClick={userLogout}>Sair</button>
          </div>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
