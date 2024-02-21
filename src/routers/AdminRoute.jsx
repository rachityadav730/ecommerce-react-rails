/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { AdminNavigation, AdminSideBar } from '@/components/common';
import PropType from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

// const AdminRoute = ({
//   isAuth, role, component: Component, ...rest
// }) => (
//   <Route
//     {...rest}
//     component={(props) => (
//       isAuth && role === 'ADMIN' ? (
//         <>
//           <AdminNavigation />
//           <main className="content-admin">
//             <AdminSideBar />
//             <div className="content-admin-wrapper">
//               <Component {...props} />
//             </div>
//           </main>
//         </>
//       ) : <Redirect to="/" />
//     )}
//   />
// );

const AdminRoute = ({ isAuth, role, element: Element, ...rest }) => {
  if (!isAuth || role !== 'ADMIN') {
    // Redirect to the home page if not authenticated or not an admin
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route
        {...rest}
        element={
          <>
            <AdminNavigation />
            <main className="content-admin">
              <AdminSideBar />
              <div className="content-admin-wrapper">
              <Component {...props} />
              </div>
            </main>
          </>
        }
      />
    </Routes>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth,
  role: auth?.role || ''
});

AdminRoute.defaultProps = {
  isAuth: false,
  role: 'USER'
};

AdminRoute.propTypes = {
  isAuth: PropType.bool,
  role: PropType.string,
  component: PropType.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: PropType.any
};

export default connect(mapStateToProps)(AdminRoute);
