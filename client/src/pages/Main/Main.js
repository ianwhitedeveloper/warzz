import React from "react";
import "./Main.css";
import Search from "../../components/Search/Search.js";
import { Results, ListItem } from "../../components/Results";
import API from "../../utils/API";

class Main extends React.Component {
  state = {
    results: [],
    resultSearch: "",
    searchQuery: ""
  };
  handleSelect = event => {
    // this.setState({
    //   searchQuery: event.target.value
    // });
    console.log(event.target.value);
  };

  handleInputChange = event => {
    this.setState({
      resultSearch: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    API.getResults(this.state.resultSearch).then(res =>
      this.setState({ results: res.data })
    );
  };
  render() {
    return (
      <div className="main-page">
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleInputChange}
          handleSelect={this.handleSelect}
        />
        <Results>
          {this.state.results.map(result => {
            return <ListItem key={result.name} name={result.name} />;
          })}
        </Results>
      </div>
    );
  }
}

export default Main;
