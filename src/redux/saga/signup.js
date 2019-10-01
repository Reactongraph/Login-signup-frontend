import { put, takeEvery, call } from 'redux-saga/effects';
import post from '../postApiCaller';

const API_DATA = payload => {
  const {
    firstName,
    lastName,
    email,
    password,
    contact,
    companyName
  } = payload;
  const body = {
    firstName,
    lastName,
    email,
    password,
    companyName,
    phone: contact
  };
  return post('users/sign-up', 'POST', body).then(response => {
    return response;
  });
};

export const SIGNUP_SAGA = function* perform_signupAction() {
  yield takeEvery('SIGNUP', function*(action) {
    yield put({ type: 'SIGNUP_STARTED' });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      yield put({
        type: 'SIGNUP_SUCCESS',
        payload: DATA,
        message: 'Signup successfully'
      });
    } catch (error) {
      yield put({ type: 'SIGNUP_FAILED', payload: error });
    }
  });
};
