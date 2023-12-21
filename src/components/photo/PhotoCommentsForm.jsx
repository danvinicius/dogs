import React from "react";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import { COMMENT_POST } from "../../api";
import Error from "../helper/Error";
import styles from "./PhotoCommentsForm.module.scss";
import PropTypes from "prop-types";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <label htmlFor="comment">
        <textarea
          className={styles.textarea}
          value={comment}
          id="comment"
          name="comment"
          placeholder="Comente..."
          onChange={({ target }) => setComment(target.value)}
        ></textarea>
      </label>
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

PhotoCommentsForm.propTypes = {
  id: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
  single: PropTypes.bool,
};

export default PhotoCommentsForm;
