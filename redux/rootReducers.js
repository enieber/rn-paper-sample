import { combineReducers } from 'redux';

import nav from './reducers';
// import users from '../components/user/reducers';
// import products from '../components/product/reducers';

const rootReducer = combineReducers({
  nav,
});

export default rootReducer;
