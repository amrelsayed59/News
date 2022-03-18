import { useState } from 'react';
import { Collapse } from 'reactstrap';
import Select from 'react-select';

const Filter: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterState, setFilterState] = useState({
    search: '',
  })

  const searchBy = (value: any) => {
    console.log('val', value)
  }

  const sortBy: any = [
    { value: 'newest first', label: 'Newest first' },
    { value: 'oldest first', label: 'Oldest first' },
  ];

  const colourOptions: any = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  console.log('state', filterState.search)

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
                  <button className="btn btn-outline-secondary" type="button" onClick={() => searchBy(filterState.search)}>
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="sort-news">
              <Select
                defaultValue=""
                name="colors"
                options={sortBy}
                className="basic-multi-select shadow-sm"
                classNamePrefix="selected"
                placeholder="Sorty By"
              />
            </div>
          </div>
          <Collapse isOpen={isOpen}>
            <div className="collapse-box">
              <div className="collapse-item">
                <label>Categories</label>
                <Select
                  defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="basic-multi-select shadow-sm"
                  classNamePrefix="select"
                />
              </div>
              <div className="collapse-item">
                <label>Tags</label>
                <Select
                  defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="basic-multi-select shadow-sm"
                  classNamePrefix="select"
                />
              </div>

              <div className="collapse-item">
                <label>From</label>
                <div className="date-box">
                  <Select
                    defaultValue=""
                    name="colors"
                    options={sortBy}
                    className="basic-multi-select shadow-sm"
                    classNamePrefix="selected"
                    placeholder="Sorty By"
                  />
                  <Select
                    defaultValue=""
                    name="colors"
                    options={sortBy}
                    className="basic-multi-select shadow-sm"
                    classNamePrefix="selected"
                    placeholder="Sorty By"
                  />
                </div>
              </div>
              <div className="collapse-item">
                <label>To</label>
                <div className="date-box">
                  <Select
                    defaultValue=""
                    name="colors"
                    options={sortBy}
                    className="basic-multi-select shadow-sm"
                    classNamePrefix="selected"
                    placeholder="Sorty By"
                  />
                  <Select
                    defaultValue=""
                    name="colors"
                    options={sortBy}
                    className="basic-multi-select shadow-sm"
                    classNamePrefix="selected"
                    placeholder="Sorty By"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-5">
              <button className="btn btn-danger rounded-0 py-2">
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
