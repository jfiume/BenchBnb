import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

// take the session reducer and combine it into a single root reducer to be passed to the store
const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer;
