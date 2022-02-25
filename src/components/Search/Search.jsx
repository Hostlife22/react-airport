import React, { useState } from 'react';
import './search.scss';

const Search = ({ setSearchParams, flightQuery }) => {
  const [searchQuery, setSearchQuery] = useState(flightQuery);

  const onChangeInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchQuery });
  };

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__content">
          <h1 className="search__title">Search flight</h1>
          <form className="search__form" onSubmit={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-512.053 29 44 43">
              <g id="ic_search_white" transform="translate(-512.053 29)">
                <path
                  d="M317.717,70.708H316.25l-.55-.538a11.072,11.072,0,0,0,2.933-7.525,11.92,11.92,0,1,0-11.917,11.646,11.628,11.628,0,0,0,7.7-2.867l.55.538V73.4l9.167,8.958,2.75-2.687Zm-11,0a8.065,8.065,0,1,1,8.25-8.063A8.124,8.124,0,0,1,306.717,70.708Z"
                  transform="translate(-289.3 -45.625)"></path>
              </g>
            </svg>
            <input
              className="search__input"
              type="text"
              placeholder="Airline, destination or flight #"
              value={searchQuery}
              onChange={onChangeInput}
            />
            <input className="search__btn" type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
