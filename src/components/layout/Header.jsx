import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { ReactComponent as IconeDogs } from "../../assets/dogs.svg";
import { UserContext } from "../../context/UserContext";
import React from "react";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <IconeDogs />
        </Link>
        {data ? (
          <div>
            <Link className={styles.login} to="/user">
              {data.nome}
            </Link>
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
