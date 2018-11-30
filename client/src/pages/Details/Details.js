import React from "react";
import { Link } from "react-router-dom";

class Details extends React.Component {
  render() {
    return (
      <div>
        Details page
        <Link to={"./"}>
          <button variant="raised">Back</button>
        </Link>
      </div>
    );
  }
}

export default Details;
