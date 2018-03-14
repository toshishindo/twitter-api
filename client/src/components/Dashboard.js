import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchTweets('/api/twitter');
    
  }


  fetchMedia(entities) {
    if (!entities.media) return;
    return entities.media.map(tag => 
      <img key={tag.id} src={ tag.media_url } alt="" width="400" />  
      );
  }


  renderTweets() {
    const items = this.props.list;
    console.log(items)
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
        <div className="items">
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ list }) {
  return { list };
}

export default connect(mapStateToProps, actions)(Dashboard);