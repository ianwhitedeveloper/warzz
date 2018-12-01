import React from "react";
import "./Results.css";
import { Link } from "react-router-dom";

export const ListItem = props => (
  <div className="list-item">
    <h3 id="person-name">{props.name}</h3>
    <Link to={"./details"}>
      <button id="details-btn" variant="raised">
        See Details
      </button>
    </Link>
    <hr />
  </div>
);
