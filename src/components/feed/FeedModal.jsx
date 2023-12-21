import React from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import styles from "./FeedModal.module.scss";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import PropTypes from "prop-types";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  const handleOutSideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setModalPhoto(null);
  };

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <Error error={error} />}
      {loading && <Loading loading={loading} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

FeedModal.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  setModalPhoto: PropTypes.func.isRequired,
};

export default FeedModal;
