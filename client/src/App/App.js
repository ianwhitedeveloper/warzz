import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main.js";
import Details from "../pages/Details/Details.js";
import "./App.css";

class App extends React.Component {
  state = {
    data: null
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
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details" component={Details} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
