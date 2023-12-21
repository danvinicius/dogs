import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../api";
export const UserContext = React.createContext();
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [logged, setLogged] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogged(null);
    window.localStorage.removeItem("token");
  }, []);

  const getUser = React.useCallback(async (token) => {
    const { url, options } = USER_GET(token);
    const res = await fetch(url, options);
    const json = await res.json();
    setData(json);
    setLogged(true);
  }, []);

  const userLogin = async ({ username, password }) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Error: Senha incorreta`);
      const { token } = await res.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/user");
    } catch (error) {
      setError(error.message);
      setLogged(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const res = await fetch(url, options);
          if (!res.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (error) {
          setError(true);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, [getUser, userLogout]);
  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, logged }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserStorage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
