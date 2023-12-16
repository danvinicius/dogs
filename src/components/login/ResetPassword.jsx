import React from "react";
import Head from "../helper/Head";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../helper/Error";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    const {response} = await request(url, options);
    if(response.ok) {
      navigate('/login')
    }
  };
  return (
    <div>
      <Head title="Resete sua senha"></Head>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        ></Input>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error}></Error>
    </div>
  );
};

export default ResetPassword;
