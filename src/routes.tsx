import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
//lazy News Module
const news = lazy(() => import('./modules/news'));

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={news} path="/" exact />
      {/* Error404 Routes */}
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
