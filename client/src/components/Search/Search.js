import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search-form">
        <h6>What are you looking for?</h6>
        <form>
          <ul className="flex">
            <li>
              <input type="radio" id="people" name="people" />
              <label for="people">People</label>
            </li>
            <li>
              <input type="radio" id="movies" name="movies" />
              <label for="movies">Movies</label>
            </li>
            <li>
              <input
                type="text"
                name="input"
                id="input"
                onChange={this.props.handleChange}
                placeholder="e.g. Chewbacca, Yoda, Boba Fett"
              />
            </li>
            <li>
              <input
                type="button"
                name="search"
                id="search"
                value="Search"
                onClick={this.props.handleSubmit}
              />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Search;
