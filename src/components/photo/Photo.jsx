import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
    const {id} = useParams();
    const {data, loading, error, request} = useFetch()
    React.useEffect(() => {
        const {url} = PHOTO_GET(id);
        request(url);

    }, [request, id])

    if (error) return <Error error={error}></Error>
    if (loading) return <Loading loading={loading}></Loading>
    if (data) return <section className='container mainContainer'><PhotoContent data={data} single={true}></PhotoContent></section>
    return null;
}

export default Photo