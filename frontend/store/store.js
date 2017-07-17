import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';


// to create a store, it can take 3 things: (1) a rootReducer [required], (2) a preloadedState [default state, not required], and (3) middleware [optional]
// rootReducer comes directly from the rootReducer we made in the root_reducer file. the preloadedState is empty. and the middleware is impored.
const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
