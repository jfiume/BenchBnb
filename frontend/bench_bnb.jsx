import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {signup} from './util/session_api_util';
import {login} from './util/session_api_util';
import {logout} from './util/session_api_util';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

// testing...
window.login = login;
window.signup = signup;
window.logout = logout;
window.getState = store.getState;
window.dispatch = store.dispatch;


  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
