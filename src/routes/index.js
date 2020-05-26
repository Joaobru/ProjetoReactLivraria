import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/home';
import Lib from '../pages/library';
import Cart from '../pages/cart';
import NotFound from '../pages/notfound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lib" component={Lib} />
      <Route path="/cart" component={Cart} />
      <Route path="/genero" component={NotFound} />
      <Route path="/ajuda" component={NotFound} />
      <Route path="/description" component={NotFound} />
    </Switch>
  );
}

export default Routes;
