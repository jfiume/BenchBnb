// API Util
import * as APIUtil from '../util/session_api_util';

// Constants
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// Async Actions
export const requestSignup = user => dispatch => {
  return APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const requestLogin = user => dispatch => {
  return APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const requestLogout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveLogoutSuccess())
  );
};


// Sync Actions
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLogoutSuccess = () => ({
  type: RECEIVE_LOGOUT_SUCCESS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
