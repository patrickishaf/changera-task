import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './ui/pages/home-page/Home';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('THE REDUX STORE IS', store);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Home/>
    </React.StrictMode>
  </Provider>
);
