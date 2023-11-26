import React from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Loading from '../helper/Loading'
import Error from '../helper/Error'
import FeedPhotosItem from './FeedPhotosItem'
import styles from './FeedPhotos.module.scss'

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(response, json);
    };
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error}></Error>
  if (loading) return <Loading></Loading>
  if (data)
  return <ul className={`${styles.feed} animeLeft`}>
    {data.map(photo =>  <FeedPhotosItem key={photo.id} photo={photo}></FeedPhotosItem>)}
  </ul>;
  return null;
};

export default FeedPhotos;
