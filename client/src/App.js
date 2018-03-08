import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/twitter');
    const body = response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  renderTweets() {
    const items = this.state.response || [];
    return items.map((item, index) =>
        <li className="item" key={index}>{item}</li>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

export default App;
