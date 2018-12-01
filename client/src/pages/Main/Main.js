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
    this.setState({
      searchQuery: event.target.value
    });
    console.log(event.target.value);
  };

  selectQuery = () => {
    switch (this.state.searchQuery) {
      case "people":
        API.getPeople(this.state.resultSearch).then(res =>
          this.setState({ results: res.data })
        );
        break;
      case "films":
        API.getMovies(this.state.resultSearch).then(res =>
          this.setState({ results: res.data })
        );
        break;
      default:
        alert("Please select People or Movies!");
    }
  };

  handleInputChange = event => {
    this.setState({
      resultSearch: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.selectQuery();
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
