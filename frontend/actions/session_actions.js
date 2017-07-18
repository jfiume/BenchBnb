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
  // return the promise from the ajax request
  return APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const requestLogin = user => dispatch => {
  return APIUtil.login(user).then(
    // return the promise from the ajax request
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const requestLogout = () => dispatch => {
  // return the promise from the ajax request
  return APIUtil.logout().then(
    () => dispatch(receiveLogoutSuccess())
  );
};


// Sync Actions
// passes the currentUser to the reducer
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// passes the logout action to the reducer
export const receiveLogoutSuccess = () => ({
  type: RECEIVE_LOGOUT_SUCCESS
});

// passes the errors to the reducer
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
