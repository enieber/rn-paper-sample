import { SwitchNavigator } from 'react-navigation';

import LoadingScreen from '../components/LoadingScreen';
import AppStack from '../components/Navgation';
import AuthStack from '../components/login';

const BaseNavigation = SwitchNavigator({
  Loading: LoadingScreen,
  App: AppStack,
  Auth: AuthStack,
});

export default BaseNavigation;
