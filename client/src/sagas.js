import { fork, call, take } from 'redux-saga/effects'
import fetchItems from './helper/fetchItems';
import { FETCH_ITEMS } from '../src/actions/types'

function* fetchList(action) {
  while (true) {
    const action = yield take(FETCH_ITEMS);
    console.log('action: ' + action);
    const { payload, error } = yield call(fetchItems, action.payload);
    if (payload && !error) {
      console.log(payload);
    } else {
      console.log(error);
    }
  }
}

export default function* rootSaga() {
  yield fork(fetchList);
}