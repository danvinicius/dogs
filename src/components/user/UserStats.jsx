import React from "react";
import Head from "../helper/Head";
import useFetch from '../../hooks/useFetch';
import {STATS_GET} from '../../api.js'
import Loading from '../helper/Loading'
import Error from '../helper/Error'
const UserStatsCharts = React.lazy(() => import('./UserStatsCharts.jsx'))

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const {url, options} = STATS_GET(token)
      await request(url, options)
    }
    getData()
  }, [request])
  if (loading) return <Loading></Loading>
  if (error) return <Error error={error}></Error>
  if (data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Minhas estatísticas"></Head>
      <UserStatsCharts data={data}></UserStatsCharts>
    </React.Suspense>
  );
  return null;
};

export default UserStats;
