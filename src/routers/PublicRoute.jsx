/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Route, Outlet } from 'react-router-dom';

import { ADMIN_DASHBOARD, SIGNIN, SIGNUP } from '@/constants/routes';

const PublicRoute = ({ isAuth, role, element: Element, path, ...rest }) => (
  <Route
    {...rest}
    element={
      (isAuth && role === 'ADMIN') ? (
        <Navigate to={ADMIN_DASHBOARD} />
      ) : ((isAuth && role === 'USER') && (path === SIGNIN || path === SIGNUP)) ? (
        <Navigate to="/" />
      ) : (
        <main className="content">
          <Element {...rest} />
        </main>
      )
    }
  />
);

PublicRoute.defaultProps = {
  isAuth: false,
  role: 'USER',
  path: '/',
};

PublicRoute.propTypes = {
  isAuth: PropTypes.bool,
  role: PropTypes.string,
  element: PropTypes.elementType.isRequired,
  path: PropTypes.string,
  rest: PropTypes.any, // Adjusted PropTypes for rest
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth,
  role: state.auth?.role || '',
});

export default connect(mapStateToProps)(PublicRoute);
