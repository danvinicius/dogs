import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import Error from "../helper/Error";
import styles from "./UserPhotoPost.module.scss";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const idade = useForm("number");
  const peso = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/user')
  }, [data, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("idade", idade.value);
    formData.append("peso", peso.value);

    const { url, options } = PHOTO_POST(
      formData,
      localStorage.getItem("token")
    );
    request(url, options);
  };
  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Poste uma foto'></Head>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome}/>
        <Input type="number" label="Peso" name="peso" {...peso}/>
        <Input type="number" label="Idade" name="idade" {...idade}/>
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error}/>
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhotoPost;
