import React from 'react';
import { Route } from 'react-router';
import App from './pages/App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DashboardCounter from './pages/DashboardCounter';
import DashboardColor from './pages/DashboardColor';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
      <Route path="/counter" component={DashboardCounter} />
      <Route path="/color" component={DashboardColor} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
