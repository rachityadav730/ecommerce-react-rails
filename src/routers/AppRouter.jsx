import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import { Basket } from '@/components/basket';
import { Footer, Navigation } from '@/components/common';
import * as ROUTES from '@/constants/routes';
import { createBrowserHistory } from 'history';
import * as view from '@/views';
import AdminRoute from './AdminRoute';
import ClientRoute from './ClientRoute';
import PublicRoute from './PublicRoute';

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

console.log("SDfasfasdfasd")

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />
      <Routes>
        <Route path={ROUTES.SEARCH} element={<view.Search />} />
        <Route path={ROUTES.HOME} element={<view.Home />} />
        <Route path={ROUTES.SHOP} element={<view.Shop />} />
        <Route path={ROUTES.FEATURED_PRODUCTS} element={<view.FeaturedProducts />} />
        <Route path={ROUTES.RECOMMENDED_PRODUCTS} element={<view.RecommendedProducts />} />
        <PublicRoute path={ROUTES.SIGNUP} element={<view.SignUp />} />
        <PublicRoute path={ROUTES.SIGNIN} element={<view.SignIn />} />
        <PublicRoute path={ROUTES.FORGOT_PASSWORD} element={<view.ForgotPassword />} />
        <Route path={ROUTES.VIEW_PRODUCT} element={<view.ViewProduct />} />
        <ClientRoute path={ROUTES.ACCOUNT} element={<view.UserAccount />} />
        <ClientRoute path={ROUTES.ACCOUNT_EDIT} element={<view.EditAccount />} />
        <ClientRoute path={ROUTES.CHECKOUT_STEP_1} element={<view.CheckOutStep1 />} />
        <ClientRoute path={ROUTES.CHECKOUT_STEP_2} element={<view.CheckOutStep2 />} />
        <ClientRoute path={ROUTES.CHECKOUT_STEP_3} element={<view.CheckOutStep3 />} />
        <AdminRoute path={ROUTES.ADMIN_DASHBOARD} element={<view.Dashboard />} />
        <AdminRoute path={ROUTES.ADMIN_PRODUCTS} element={<view.Products />} />
        <AdminRoute path={ROUTES.ADD_PRODUCT} element={<view.AddProduct />} />
        <AdminRoute path={`${ROUTES.EDIT_PRODUCT}/:id`} element={<view.EditProduct />} />
        <Route path="*" element={<view.PageNotFound />} />
      </Routes>
      <Footer />
    </>
  </Router>
);

export default AppRouter;
