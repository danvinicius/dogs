import React from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.scss";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    };
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error}/>;
  if (loading) return <Loading/>;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}/>
        ))}
      </ul>
    );
  return null;
};

export default FeedPhotos;
