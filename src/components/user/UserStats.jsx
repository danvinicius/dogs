import React from "react";
import Head from "../helper/Head";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api.js";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
const UserStatsCharts = React.lazy(() => import("./UserStatsCharts.jsx"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    };
    getData();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Minhas estatísticas" />
        <UserStatsCharts data={data} />
      </React.Suspense>
    );
  return null;
};

export default UserStats;
