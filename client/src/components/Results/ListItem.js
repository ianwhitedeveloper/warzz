import React from "react";
import "./Results.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";

export class ListItem extends React.Component {
  static contextType = AppContext;

  render() {
    const context = this.context;
    return (
      <div className="list-item">
        <h3 id="person-name">{this.props.name}</h3>
        <Link to={"./details"}>
          <button onClick={context.handleDetails} id="details-btn" data-index={this.props.resultIndex} variant="raised">
            See Details
          </button>
        </Link>
        <hr />
      </div>
    )
  }
}
