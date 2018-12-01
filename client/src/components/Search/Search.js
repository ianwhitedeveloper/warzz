import React from "react";
import "./Search.css";
// import API from "../../utils/API";

const Search = props => (
  <div className="search-form">
    <h6>What are you looking for?</h6>
    <form onSubmit={props.handleSubmit}>
      <ul className="flex">
        <div className="radio-btns">
          <li>
            <input
              type="radio"
              id="people"
              name="searchQuery"
              value="people"
              onChange={props.handleSelect}
            />
            <label htmlFor="people">People</label>
          </li>
          <li>
            <input
              type="radio"
              id="movies"
              name="searchQuery"
              value="films"
              onChange={props.handleSelect}
            />
            <label htmlFor="movies">Movies</label>
          </li>
        </div>

        <li>
          <input
            type="text"
            name="input"
            id="input"
            value={props.resultSearch}
            onChange={props.handleChange}
            placeholder="e.g. Chewbacca, Yoda, Boba Fett"
          />
        </li>
        <li>
          <input
            type="button"
            name="search"
            id="search"
            value="Search"
            onClick={props.handleSubmit}
          />
        </li>
      </ul>
    </form>
  </div>
);

export default Search;
