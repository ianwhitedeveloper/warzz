import React from "react";
import "./Main.css";
import Search from "../../components/Search/Search.js";
import { Results, ListItem } from "../../components/Results";
import API from "../../utils/API";

class Main extends React.Component {
  state = {
    results: [],
    resultSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted");
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
        />
        <Results>
          {this.state.results.map(result => {
            return (
              <ListItem key={result.name} name={this.state.resultSearch} />
            );
          })}
        </Results>
      </div>
    );
  }
}

export default Main;
