import { createStore, compose } from 'redux';

import rootReducer from './rootReducers';

export default function configureStore() {
  const store = createStore(rootReducer, {});
  
  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }

  return store;
}
