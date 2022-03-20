import { useEffect, useState } from 'react';
import Axios from 'axios';
const newsList: string = process.env.REACT_APP_API_URL as string;

const useFetchNews = () => {
  const [result, setResult] = useState([]);

  const fetchNews = async () => {
    const res = await Axios.get(`${newsList}/data`);
    const data = await res.data.searchAPISearch.documents.map(
      (data: any) => data
    );
    setResult(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return result;
};

export default useFetchNews;
