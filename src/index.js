import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@/styles/style.scss';
import configureStore from './redux/store/store';

const { store, persistor } = configureStore();
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} />
  </React.StrictMode>
);

