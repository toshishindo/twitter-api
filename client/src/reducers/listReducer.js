import { FETCH_TWEETS_SUCCESS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS:
      return action.payload;
    default:
      return state;  
  }
}