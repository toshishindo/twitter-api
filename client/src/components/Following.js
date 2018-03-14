import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

class Following extends Component {

  componentDidMount() {
    this.props.fetchFriends('/api/twitter/following');
  }

  renderTweets() {
    const users = this.props.friends;
    console.log(users);
    return users.map(user => (
      <div className="item" key={user.id}>
        <img src={user.profile_image_url} width="50" alt="" />
        <h4>Name: {user.name}</h4>
        <h5>Location: {user.location}</h5>
        <h5>Description: {user.description}</h5>
        <h6>Followers: {user.followers_count}</h6>
        <h6>Following: {user.friends_count}</h6>
        <h6>Created at: {new Date(user.created_at).toLocaleString()}</h6>
      </div>
    ));
  }

  render() {
    return (
      <div className="App-intro">
        <h2>Following</h2>
        <div className="items">
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ friends }) {
  return { friends };
}

export default connect(mapStateToProps, { fetchFriends })(Following);
