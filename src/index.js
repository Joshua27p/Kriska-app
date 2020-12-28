import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
    ,document.getElementById('root')
);

 