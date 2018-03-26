import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import App from './App';

import configureStore from './redux/store';

const Store = configureStore();

export default class Root extends PureComponent {
  render() {
    return (
      <Provider
        store={Store}
      >
        <App />
      </Provider>
    )
  }
};
