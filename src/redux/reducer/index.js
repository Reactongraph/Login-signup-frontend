import { combineReducers } from 'redux';
import signupData from './signup';
import loginData from './login';

// Wrap all reducers in a container
export default combineReducers({ signupData, loginData });
