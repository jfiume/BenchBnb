import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {signup} from './util/session_api_util';
import {login} from './util/session_api_util';
import {logout} from './util/session_api_util';



document.addEventListener('DOMContentLoaded', () => {
  // renders the original root element from root.html.erb
  // which is letterally just: <main id="root"></main>
  const root = document.getElementById('root');
  // here we configure the store from store.js
  const store = configureStore();

// testing...
// these are for testing where we put functions on the window to see them in the console. We want to remove these for produciton build.
window.login = login;
window.signup = signup;
window.logout = logout;
window.getState = store.getState;
window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store } />, root);
});
