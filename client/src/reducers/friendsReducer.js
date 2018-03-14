import { FETCH_FRIENDS_SUCCESS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return action.payload;
    default:
      return state;  
  }
}