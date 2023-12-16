import Head from "../helper/Head";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../helper/Error";

const LostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: `${window.location.origin}/login/resetar`,
      });
      await request(url, options);
    }
  };
  return (
    <section>
      <Head title="Perdeu a senha?"></Head>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail / Usuário"
            type="text"
            name="login"
            {...login}
          ></Input>
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}

      <Error error={error}></Error>
    </section>
  );
};

export default LostPassword;
