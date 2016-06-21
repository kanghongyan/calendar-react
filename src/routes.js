/**
 * Created by khongyan on 16/6/21.
 */
import React from 'react';

import { Router, Route, IndexRoute, Redirect } from 'react-router';

//calendar
import Calendar from './pages/calendar';

const routes = (
  <Router>
    <Route path="/" component={ Calendar }/>
  </Router>
);

export default routes;