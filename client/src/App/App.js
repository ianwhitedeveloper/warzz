import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main.js";
import Details from "../pages/Details/Details.js";
import "./App.css";
import API from "../utils/API";
import {AppContext} from "../utils/AppContext";

class App extends React.Component {
  handleSelect = event => {
    this.setState({
      searchQuery: event.target.value
    });
    console.log(event.target.value);
  };

  handleDetails = event => {
    this.setState({resultIndex: Number(event.target.dataset.index)})
  }

  selectQuery = () => {
    switch (this.state.searchQuery) {
      case "people":
        API.getPeople(this.state.resultSearch).then(res =>
          this.setState({ results: res.data })
        );
        break;
      case "movies":
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

  state = {
    results: [],
    resultIndex: null,
    searchQuery: "people",
    detailsSelection: "",
    handleSelect: this.handleSelect,
    selectQuery: this.selectQuery,
    handleInputChange: this.handleInputChange,
    handleSubmit: this.handleSubmit,
    handleDetails: this.handleDetails
  };

  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch("/express_backend");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>SWStarter</h2>
        </header>
        <div className="container">
          <AppContext.Provider value={this.state}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/details" component={Details} />
            </Switch>
          </AppContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
