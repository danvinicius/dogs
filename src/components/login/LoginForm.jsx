import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import Error from "../helper/Error";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";
import React from "react";
import styles from "./LoginForm.module.scss";
import ButtonStyles from "../forms/Button.module.scss";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin({ username, password });
    }
  };
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          {...username}
        ></Input>
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        ></Input>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se agora</p>
        <Link className={ButtonStyles.button} to="/login/criar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
