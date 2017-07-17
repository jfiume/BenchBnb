import { RECEIVE_CURRENT_USER,
  RECEIVE_LOGOUT_SUCCESS,
  RECEIVE_ERRORS }
  from '../actions/sessions_actions';

import merge from 'lodash/merge';

// default empty state
const _nullUser = {
  currentUser: null,
  errors: []
};

// be careful to not alter state in any way other than lodash/merge, Object.freeze() or Object.assign
const SessionReducer = function (state = _nullUser, action) {
// switch statement evaluates the incoming action
  switch(action.type) {
    // when the action is receiveCurrentUser passed in from the actions with currentUser as its input argument. The currentUser slice of state is then updated to be the passed in currentUser directly from actions from ajax
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    // when the action is logout, passed in from actions with no agrument provided. It returns us to the empty state
    case RECEIVE_LOGOUT_SUCCESS:
      return merge({}, _nullUser);
    // when the action is errors passed in from actions with the errors argument provided. It updated the state with errors generated from the ajax promise
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors };
      return merge({}, state, errors);
    // when no action is provided
    default:
      return state;
  }
};
