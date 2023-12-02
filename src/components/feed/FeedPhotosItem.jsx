import style from './FeedPhotosItem.module.scss'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo)
  }
  return (
    <li className={style.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
