import Image from "../helper/Image";
import style from "./FeedPhotosItem.module.scss";
import PropTypes from "prop-types";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <li className={style.photo} onClick={handleClick}>
      <Image alt={photo.title} src={photo.src} />
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

FeedPhotosItem.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    acessos: PropTypes.string.isRequired,
  }),
  setModalPhoto: PropTypes.func.isRequired,
};

export default FeedPhotosItem;
