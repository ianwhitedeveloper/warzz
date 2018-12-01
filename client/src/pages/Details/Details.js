import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../utils/AppContext';
import "./Details.css";

class Details extends React.Component {
  static contextType = AppContext;

  render() {
    const context = this.context;
    const result = context.results[context.resultIndex];

    return (
      <div className="details-wrapper">
        {context.searchQuery === 'people' &&
        (
            <div className="info">
              <h3 id="title">{result.name}</h3>
              <div className="details">
                <h4>Details</h4>
                <hr />
                <ul>
                  <li>birthday: {result.birth_year && result.birth_year}</li>
                  <li>gender: {result.gender && result.gender}</li>
                  <li>eye: {result.eye_color && result.eye_color}</li>
                  <li>hair: {result.hair_color && result.hair_color}</li>
                  <li>height: {result.height && result.height}</li>
                  <li>mass: {result.mass && result.mass}</li>
                </ul>
              </div>
            </div>
          )
        }
        {context.searchQuery === 'movies' &&
          (
            <div className="movies">
              <h4>Movies</h4>
              <hr />
              <ul>
                <li>
                  <a href="#">{result.title}</a>
                </li>
              </ul>
            </div>
          )
        }
        <Link to={"./"}>
          <button id="back-btn" variant="raised">
            Back to Search
          </button>
        </Link>
      </div>
    );
  }
}

export default Details;
