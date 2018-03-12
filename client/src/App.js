import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Following from "./Following";
import Header from "./Header";
import { BrowserRouter, Route} from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/following" component={Following} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
