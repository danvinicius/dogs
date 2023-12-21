import React from "react";
import styles from "./PhotoContent.module.scss";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../context/UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../helper/Image";
import PropTypes from "prop-types";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);
  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image alt={photo.title} src={photo.src} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === 1 ? "ano" : "anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

PhotoContent.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      acessos: PropTypes.number.isRequired,
      idade: PropTypes.string.isRequired,
      peso: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment_ID: PropTypes.string,
        comment_author: PropTypes.string,
        comment_content: PropTypes.string,
      })
    ),
  }),
  single: PropTypes.bool,
};

export default PhotoContent;
