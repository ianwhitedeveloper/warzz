import React from "react";
import "./Main.css";
import Search from "../../components/Search/Search.js";
import Results from "../../components/Results/Results.js";

class Main extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Search />
        <Results />
      </div>
    );
  }
}

export default Main;
