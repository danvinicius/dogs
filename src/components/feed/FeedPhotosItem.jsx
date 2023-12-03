import Image from '../helper/Image';
import style from './FeedPhotosItem.module.scss'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo)
  }
  return (
    <li className={style.photo} onClick={handleClick}>
      <Image alt={photo.title} src={photo.src}/>
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
