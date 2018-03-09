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
    console.log(body);

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  renderTweets() {
    const items = this.state.response || [];
    return items.map(({id, user, text, created_at, entities}) =>
      <div className="item" key={id}>
        <img src={user.profile_image_url} width="50" height="50" alt="" />   
        <h3>User name: {user.name}</h3>
        <h4>Location: {user.location}</h4>
        <h5>{new Date(created_at).toLocaleString()}</h5>
        {text}
      </div>  
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

export default App;
