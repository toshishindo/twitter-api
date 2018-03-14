import { call, put, takeLatest } from 'redux-saga/effects';
import fetchItems from './helper/fetchItems';
import { FETCH_TWEETS, FETCH_FRIENDS, FETCH_TWEETS_SUCCESS, FETCH_FRIENDS_SUCCESS } from '../src/actions/types';

function* fetchTweetsSaga(action) {
  try {
    console.log(action);
    const { data } = yield call(fetchItems, action.payload);
    yield put({ type: FETCH_TWEETS_SUCCESS, payload: data });
  } catch(error) {
    console.log(error);
  }
}

function* fetchFriendsSaga(action) {
  try {
    console.log(action);
    const { data } = yield call(fetchItems, action.payload);
    yield put({ type: FETCH_FRIENDS_SUCCESS, payload: data.users })
  } catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield takeLatest(FETCH_TWEETS, fetchTweetsSaga);
  yield takeLatest(FETCH_FRIENDS, fetchFriendsSaga);
}