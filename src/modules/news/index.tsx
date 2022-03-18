import { useState } from 'react';
import useFetchNews from '../../services/news';
import Filter from './Filter';
import List from './List';

const News: React.FC<any> = () => {
  // let page_size: number = 5;
  // let page_number: number = 1;

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [allLatestNews, setAllLatestNews] = useState([]);
  

  //fetch news from context
  const fetchNews = useFetchNews();

  const AllNews = fetchNews.map((item: any, index: number) => (
    <List item={item} index={index} key={item.id} />
  ));

  const loadMore = () => {
    let newItems = paginate(AllNews, pageSize, pageNumber);
    if (newItems.length > 0) {
      setPageNumber(pageNumber + 1);
    }
    let allItems:any = [...AllNews, ...newItems]
    setAllLatestNews(
     allItems
    );

    console.log(AllNews);
    console.log(newItems);
    console.log('----', AllNews);

    // if (AllNews.length === all)
  };
  console.log('allLatestNews', allLatestNews);

  function paginate(array: any, page_size: number, page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  // function getFirstNews () {
  //   setPageNumber(1);
  //   loadMore();
  // }

  return (
    <>
      <Filter />
      <div className="news-section">
        <div className="container-fluid">
          <div className="new-list">{AllNews}</div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger rounded-0 py-2 my-3" onClick={loadMore}>
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
