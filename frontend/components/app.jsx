import React from 'react';
import GreetingContainer from './greeting/greeting_container';
// import SessionForm from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
