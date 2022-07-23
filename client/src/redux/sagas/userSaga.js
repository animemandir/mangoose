import { put } from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import * as API from '../../api';

export function* getMeSaga() {
  yield put(actionCreators.getMeRequest());
  try {
    const { data: { data } } = yield API.getMe();
    yield put(actionCreators.getMeSuccess(data));
  } catch (error) {
    const { response: { data: { errors } } } = error;
    yield put(actionCreators.getMeError(errors));
    return;
  }
}