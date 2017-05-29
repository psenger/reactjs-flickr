
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import SearchPage from './containers/searchPage';

import './index.scss';

require('es6-promise').polyfill();

ReactDOM.render(
  <Provider store={store}>
    <SearchPage />
  </Provider>,
    document.getElementById('root'));
