import React, { StrictMode } from 'react';
import PropType from 'prop-types';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
// import { PersistGate } from 'redux-persist/integration/react';


const App = ({ store, persistor }) => (
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<Preloader />} persistor={persistor}> */}
        <AppRouter />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired
};

export default App;