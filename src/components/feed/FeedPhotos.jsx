import React from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.scss";

const FeedPhotos = ({ setInfinite, page, user, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response?.ok && json.length < total) {
        setInfinite(false);
      }
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  return null;
};

export default FeedPhotos;
