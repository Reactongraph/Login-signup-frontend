import { all } from 'redux-saga/effects';
import { SIGNUP_SAGA } from './signup';
import { LOGIN_SAGA } from './login';
import { RESET } from './resetSaga';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([SIGNUP_SAGA(), LOGIN_SAGA(), RESET()]);
};

export default rootSaga;
