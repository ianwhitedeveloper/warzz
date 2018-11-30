import React from "react";
import "./Results.css";
import { Link } from "react-router-dom";

export const ListItem = props => (
  <div className="list-item">
    <h3>{props.name}</h3>
    <Link to={"./details"}>
      <button variant="raised">More Info</button>
    </Link>
  </div>
);
