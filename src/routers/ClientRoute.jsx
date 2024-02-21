/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Route, Outlet } from 'react-router-dom';

import { ADMIN_DASHBOARD, SIGNIN } from '@/constants/routes';

const PrivateRoute = ({ isAuth, role, element: Element, ...rest }) => (
  <Route
    {...rest}
    element={
      isAuth && role === 'USER' ? (
        <main className="content">
          <Element {...rest} />
        </main>
      ) : isAuth && role === 'ADMIN' ? (
        <Navigate to={ADMIN_DASHBOARD} />
      ) : (
        <Navigate
          to={{
            pathname: SIGNIN,
            state: { from: rest.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.defaultProps = {
  isAuth: false,
  role: 'USER',
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  role: PropTypes.string,
  element: PropTypes.elementType.isRequired,
  rest: PropTypes.any, // Adjusted PropTypes for rest
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth,
  role: state.auth?.role || '',
});

export default connect(mapStateToProps)(PrivateRoute);
