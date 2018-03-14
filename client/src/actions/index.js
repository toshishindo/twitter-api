import { FETCH_TWEETS, FETCH_FRIENDS } from './types';

export const fetchTweets = (path) =>  {
  return {
    type: FETCH_TWEETS,
    payload: path
  };
};

export const fetchFriends = (path) => {
  return {
    type: FETCH_FRIENDS,
    payload: path
  };
};
