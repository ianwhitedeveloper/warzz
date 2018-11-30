import React from "react";
import "./Main.css";
import Search from "../../components/Search/Search.js";
import { Results, ListItem } from "../../components/Results";

class Main extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Search />
        <Results>
          <ListItem name="Boba Fett" />
        </Results>
      </div>
    );
  }
}

export default Main;
