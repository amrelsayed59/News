import { useEffect, useState } from 'react';
import useFetchNews from '../../services/news';
import Filter from './Filter';
import List from './List';
import { FilterState, NewsItem } from './model';

const pageSize: number = 3;

const News: React.FC<any> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [allResult, setAllResult] = useState([]);

  //filter state
  const [filterState, setFilterState] = useState<FilterState>({
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
  const allNews = useFetchNews();

  //Filter by title
  const filterTitle = ({ title }: NewsItem) => {
    return title.toLowerCase().indexOf(filterState.search.toLowerCase()) !== -1;
  };

  //Filter by category
  const filterByCategory = ({ category }: NewsItem) => {
    if (filterState.categories.length === 0) return true;
    return filterState.categories.includes(category);
  };

  //Filter by Tags
  const filterByTags = ({ tags }: NewsItem) => {
    if (filterState.tags.length === 0) return true;
    const containsAll = tags.some((element: any) => {
      return filterState.tags.includes(element);
    });
    return containsAll;
  };

  //Filtering From and to of date
  function filterByDate({ createdTime }: NewsItem) {
    const date1 =
      new Date(`${filterState.fromYear}-${filterState.fromMonth}`).getTime() /
      1000;
    const date2 =
      new Date(`${filterState.toYear}-${filterState.toMonth}`).getTime() / 1000;
    const formatedDate = new Date(createdTime).getTime();
    if (filterState.fromYear === '' && filterState.toYear === '') return true;
    if (filterState.fromYear && !filterState.toYear)
      return formatedDate >= date1;
    if (!filterState.fromYear && filterState.toYear)
      return formatedDate < date2;
    if (filterState.fromYear && filterState.toYear)
      return formatedDate > date1 && formatedDate < date2;
  }

  const handleFilter = () => {
    const filteredData = allNews
      .filter(filterByCategory)
      .filter(filterByTags)
      .filter(filterByDate);
    setAllResult(filteredData);
  };

  const renderNews = () =>
    allResult
      .filter(filterTitle)
      .sort((a: any, b: any) => {
        if (filterState.sort === 'oldest first') {
          return a.createdTime - b.createdTime;
        }
        return b.createdTime - a.createdTime;
      })
      .slice(0, pageSize * pageNumber)
      .map((item: NewsItem, index: number) => (
        <List item={item} index={index} key={item.id} />
      ));

  const loadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    setAllResult(allNews);
  }, [allNews]);

  return (
    <>
      <Filter
        filterState={filterState}
        setFilterState={setFilterState}
        handleFilter={handleFilter}
      />
      <div className="news-section">
        <div className="container-fluid">
          <div className="new-list">
            {allResult.length > 0 ? (
              renderNews()
            ) : (
              <p className="font-weight-bold text-secondary text-center">
                No Result Found
              </p>
            )}
          </div>
          {allNews.length !==
            allResult.slice(0, pageSize * pageNumber).length &&
            allResult.length > 0 && (
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-danger rounded-0 py-2 my-3"
                  onClick={loadMore}
                >
                  Load More
                </button>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default News;
