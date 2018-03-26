import { NavigationActions } from 'react-navigation';


import BaseNavigation from './BaseNavigation';
import * as types from './routersType';

// const firstAction = BaseNavigation.router.getActionForPathAndParams('Loading');
// const tempNavState = BaseNavigation.router.getStateForAction(firstAction);
// const initialState = BaseNavigation.router.getStateForAction(
//   tempNavState,
// );

const initialState = {  
  todos: []
}

function routersReducers(state = initialState, action) {
  return state
}

export default routersReducers;
