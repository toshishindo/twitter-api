import { combineReducers } from 'redux';
import listReducer from './listReducer';
import friendsReducer from './friendsReducer';

export default combineReducers({
  list: listReducer,
  friends: friendsReducer
});