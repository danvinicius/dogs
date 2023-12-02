import React from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import styles from "./FeedModal.module.scss";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  const handleOutSideClick = ({target, currentTarget}) => {
    if (target === currentTarget) setModalPhoto(null);

  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading loading={loading}/>}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal;
