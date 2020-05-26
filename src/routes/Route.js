import React from 'react';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';

import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component
}) {
  const Layout = DefaultLayout;

  return (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
