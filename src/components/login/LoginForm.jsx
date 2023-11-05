import React from "react";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const res = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        }
      );
      const json = await res.json();
      console.log(json);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
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
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
    </section>
  );
};

export default LoginForm;
