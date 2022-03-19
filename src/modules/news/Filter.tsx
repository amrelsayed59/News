import { useState } from 'react';
import { Collapse } from 'reactstrap';
import Select from 'react-select';

const Filter: React.FC<any> = ({ filterState, setFilterState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const searchBy = (value: any) => {
    console.log('val', value);
  };

  //filter state
  const [filter, setFilter] = useState({
    categories: [],
    tags: [],
    fromMonth: [],
    toMonth: [],
    fromYear:[],
    toYear: [],
  });

  interface SortBy {
    value: string;
    label: string;
  }

  const sortBy: any = [
    { value: 'newest first', label: 'Newest first' },
    { value: 'oldest first', label: 'Oldest first' },
  ];

  interface CategoryOptions {
    value: string;
    label: string;
  }

  const categoryOptions: CategoryOptions[] = [
    { value: 'Products', label: 'Products' },
    { value: 'Planet news', label: 'Planet news' },
    { value: 'Digital society', label: 'Digital society' },
    { value: 'Inclusion', label: 'Inclusion' },
    { label: 'Technology news', value: 'Technology news' },
    { label: 'Vodafone Foundation news', value: 'Vodafone Foundation news' },
    { label: 'Public Policy news', value: 'Public Policy news' },
  ];

  interface TagOptions {
    value: string;
    label: string;
  }

  const tagOptions: TagOptions[] = [
    { label: '3G', value: '3G' },
    { label: '4G', value: '4G' },
    { label: '5G', value: '5G' },
    { label: 'Africa', value: 'Africa' },
    { label: 'Agriculture', value: 'Agriculture' },
    { label: 'AI', value: 'AI' },
    { label: 'AI', value: 'AI' },
    { label: 'Appointments', value: 'Appointments' },
    { label: 'Apps', value: 'Apps' },
    { label: 'Automotive', value: 'Automotive' },
    { label: 'Big data', value: 'Big data' },
  ];

  interface MonthFull {
    value: string;
    label: string;
  }

  const monthFull: any = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  const allYears: any = [
    { label: '2015', value: '2015' },
    { label: '2016', value: '2016' },
    { label: '2017', value: '2017' },
    { label: '2018', value: '2018' },
    { label: '2019', value: '2019' },
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2021', value: '2021' },
  ]

  const handleChangeCategory = (event: any) => {
    let categories = event.map((item: CategoryOptions) => {
      return item.value;
    });
    setFilter({
      ...filter,
      categories,
    });
  };

  const handleChangeTags = (event: any) => {
    let tags = event.map((item: TagOptions) => {
      return item.value;
    });
    setFilter({
      ...filter,
      tags,
    });
  };

  // const handleChangeDate = ((e: any) => {
  //     // let fromMonth = event.map((item: any) => {
  //     //   return item.value;
  //     // })
  //     setFilterState({
  //       ...filterState,
  //       fromMonth: e.value,
  //     });
  // })

  const applyFilter = () => {
    setFilterState({
      ...filterState,
      ...filter,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="filter-section">
          <div className="filter-box">
            <div className="all-filters">
              <button className="btn-clear" onClick={() => setIsOpen(!isOpen)}>
                Filter
                <i
                  className={`fas fa-fw ${
                    isOpen !== true ? 'fa-chevron-down ' : 'fa-chevron-up'
                  }`}
                ></i>
              </button>
            </div>
            <div className="search-bar">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    setFilterState({
                      ...filterState,
                      search: e.target.value,
                    });
                  }}
                  value={filterState.search}
                  autoComplete="off"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => searchBy(filterState.search)}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="sort-news">
              <Select
                options={sortBy}
                classNamePrefix="selected"
                name="colors"
                defaultValue={sortBy.filter(
                  (obj: any) => obj.value === filterState.sort
                )}
                onChange={(e: any) => {
                  setFilterState({
                    ...filterState,
                    sort: e.value,
                  });
                }}
              />
            </div>
          </div>
          <Collapse isOpen={isOpen}>
            <div className="collapse-box">
              <div className="collapse-item">
                <label>Categories</label>
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={categoryOptions}
                  className="basic-multi-select shadow-sm"
                  classNamePrefix="select"
                  onChange={(e) => {
                    handleChangeCategory(e);
                  }}
                />
              </div>
              <div className="collapse-item">
                <label>Tags</label>
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={tagOptions}
                  className="basic-multi-select shadow-sm"
                  classNamePrefix="select"
                  onChange={(e) => {
                    handleChangeTags(e);
                  }}
                />
              </div>

              <div className="collapse-item">
                <label>From</label>
                <div className="date-box">
                  <Select
                    options={monthFull}
                    classNamePrefix="selected"
                    className="basic-multi-select shadow-sm"
                    name="colors"
                    defaultValue=""
                    onChange={(e: any) => {
                      setFilterState({
                        ...filterState,
                        fromMonth: e.value,
                      });
                    }}
                    placeholder="Month"
                  />
                  <Select
                   options={allYears}
                   classNamePrefix="selected"
                   className="basic-multi-select shadow-sm"
                   name="colors"
                   defaultValue=""
                   onChange={(e: any) => {
                     setFilterState({
                       ...filterState,
                       fromYear: e.value,
                     });
                   }}
                   placeholder="Year"
                  />
                </div>
              </div>
              <div className="collapse-item">
                <label>To</label>
                <div className="date-box">
                  <Select
                    options={monthFull}
                    classNamePrefix="selected"
                    name="colors"
                    className="basic-multi-select shadow-sm"
                    defaultValue=""
                    onChange={(e: any) => {
                      setFilterState({
                        ...filterState,
                        toMonth: e.value,
                      });
                    }}
                    placeholder="Month"
                  />
                  <Select
                    options={allYears}
                    classNamePrefix="selected"
                    className="basic-multi-select shadow-sm"
                    name="colors"
                    defaultValue=""
                    onChange={(e: any) => {
                      setFilterState({
                        ...filterState,
                        toYear: e.value,
                      });
                    }}
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-5">
              <button
                className="btn btn-danger rounded-0 py-2"
                onClick={applyFilter}
              >
                Apply Filters
              </button>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Filter;
