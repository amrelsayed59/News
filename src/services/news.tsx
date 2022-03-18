import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useMainDispatch, useMainState } from '../context/gloabal';

const useFetchNews = () => {
    const dispatch = useMainDispatch();
    const useMain = useMainState();
    const [result, setResult] = useState([]);

    const fetchNews = async () => {
        const res = await Axios.get("http://localhost:3005/data");
        const data = await res.data.searchAPISearch.documents.map((data: any) => data);
        dispatch({type: "setNews", payload: data})
    }

    useEffect(() => {
        dispatch({type: 'restNews', payload: []});
        fetchNews();
        setResult(useMain.ListNews);
    }, []);
    
    return result;
}

export default useFetchNews;