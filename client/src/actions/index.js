import { FETCH_ITEMS, FETCH_FRIENDS } from './types';
import fetchItems from '../helper/fetchItems';

export const fetchAPI = (path) => async dispatch => {
  const res = await fetchItems(path);

  dispatch ({type: FETCH_ITEMS, payload: res})
};

export const fetchFriends = (path) => async dispatch => {
  const res = await fetchItems(path);

  dispatch ({type: FETCH_FRIENDS, payload: res.users})
};
