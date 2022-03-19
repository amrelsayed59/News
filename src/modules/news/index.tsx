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

  interface Filter {
    search: string;
    sort: string;
    categories: string[];
    tags: string[];
    date: Date | string;
  }

  //filter state
  const [filterState, setFilterState] = useState<any>({
    search: '',
    sort: 'newest first',
    categories: [],
    tags: [],
    date: '',
    fromMonth: '',
    toMonth: '',
    fromYear: '',
    toYear: '',
  });

  //fetch news from context
  const fetchNews = useFetchNews();

  // console.log('filterState', filterState);

  //Filter by title
  const filterTitle = ({ title }: any) => {
    return title.toLowerCase().indexOf(filterState.search.toLowerCase()) !== -1;
  };

  //Filter by category
  const filterCategory = ({ category }: any) => {
    if (filterState.categories.length === 0) return true;
    return filterState.categories.includes(category);
  };

  //Filter by Tags
  const filterTags = ({ tags }: any) => {
    if (filterState.tags.length === 0) return true;
    const containsAll = tags.some((element: any) => {
      return filterState.tags.includes(element);
    });
    return containsAll;
  };

  //Filtering From and to of date
  function getFilterDate({createdTime}: any) {
    if (filterState.date === '') return true;
    console.log('filter date fromMonth',filterState.fromMonth)
    console.log('filter date toMonth',filterState.toMonth)
    console.log('filter date fromYear',filterState.fromYear)
    console.log('filter date toYear',filterState.toYear)
  }

  const AllNews = fetchNews
    .filter(filterTitle)
    .filter(filterCategory)
    .filter(filterTags)
    .filter(getFilterDate)
    .sort((a: any, b: any) => {
      if (filterState.sort === 'oldest first') {
        return a.createdTime - b.createdTime;
      }
      return b.createdTime - a.createdTime;
    })
    .map((item: any, index: number) => (
      <List item={item} index={index} key={item.id} />
    ));
  // console.log('AllNews', AllNews);
  const loadMore = () => {
    let newItems = paginate(AllNews, pageSize, pageNumber);
    if (newItems.length > 0) {
      setPageNumber(pageNumber + 1);
    }
    let allItems: any = [...AllNews, ...newItems];
    setAllLatestNews(allItems);

    // console.log(AllNews);
    // console.log(newItems);
    // console.log('----', AllNews);

    // if (AllNews.length === all)
  };
  // console.log('allLatestNews', allLatestNews);

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
      <Filter filterState={filterState} setFilterState={setFilterState} />
      <div className="news-section">
        <div className="container-fluid">
          <div className="new-list">
            {AllNews.length > 0 ? (
              AllNews
            ) : (
              <p className="font-weight-bold text-secondary text-center">
                No Result Found
              </p>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger rounded-0 py-2 my-3"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
