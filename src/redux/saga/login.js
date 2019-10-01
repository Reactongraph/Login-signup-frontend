import { put, takeEvery, call } from 'redux-saga/effects';
import post from '../postApiCaller';

const API_DATA = payload => {
  const { email, password } = payload;
  const body = {
    email,
    password
  };
  return post('users/login', 'POST', body).then(response => {
    return response;
  });
};

export const LOGIN_SAGA = function* perform_loginAction() {
  yield takeEvery('LOGIN', function*(action) {
    yield put({ type: 'LOGIN_STARTED' });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      localStorage.setItem('token', DATA.token);
      localStorage.setItem('email', DATA.data.email);
      yield put({ type: 'LOGIN_SUCCESS', payload: DATA });
    } catch (error) {
      yield put({ type: 'LOGIN_FAILED', payload: error });
    }
  });
};
