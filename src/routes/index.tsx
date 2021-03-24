import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import { SingleUser } from '../Pages/SingleUser';
import { Dashboard } from '../Pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signUp" component={SignUp} />

    <Route path="/singleUser" component={SingleUser} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
