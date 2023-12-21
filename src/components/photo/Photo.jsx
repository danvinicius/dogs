import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    const { url } = PHOTO_GET(id);
    request(url);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading loading={loading} />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  return null;
};

export default Photo;
