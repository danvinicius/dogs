import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ReactComponent as IconeMinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as IconeEstatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as IconeAdicionarFoto } from "../../assets/adicionar.svg";
import { ReactComponent as IconeSair } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.scss";
import { useNavigate } from "react-router-dom";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/user" end>
          <IconeMinhasFotos />
          {mobile && "Minha conta"}
        </NavLink>
        <NavLink to="/user/stats">
          <IconeEstatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/user/post">
          <IconeAdicionarFoto />
          {mobile && "Postar foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <IconeSair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
