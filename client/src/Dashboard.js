import React, { Component } from 'react';
import fetchItems from './helper/fetchItems';


class Dashboard extends Component {
  state = {
    response: [] 
  };

  componentDidMount() {
    this.fetchList();
    
  }

  fetchList = async () => {
    const body = await fetchItems('/api/twitter');
    this.setState({ response: body });
  };

  fetchMedia(entities) {
    if (!entities.media) return;
    return entities.media.map(tag => 
      <img key={tag.id} src={ tag.media_url } alt="" width="400" />  
      );
  }


  renderTweets() {
    const items = this.state.response;
    return items.map(({id, user, text, created_at, entities}) =>
      <div className="item" key={id}>
        <img src={user.profile_image_url} width="50" alt="" />   
        <h4>Name: {user.name}</h4>
        <h5>Location: {user.location}</h5>
        <h6>{new Date(created_at).toLocaleString()}</h6>
        {text}
        <h5>{this.fetchMedia(entities)}</h5>
      </div>  
    );
  }


  render() {
    return (
      <div className="App-intro">
        <a className="fetch-button waves-effect waves-light btn-large" onClick={this.fetchList}>Fetch</a>
        <div className="items">
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

export default Dashboard;