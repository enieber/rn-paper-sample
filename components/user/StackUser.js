import { StackNavigator } from 'react-navigation';

import ListUser from './ListUser';
import ItemUser from './item';

const StackUser = StackNavigator({
  ListUser: {
    screen: ListUser,
  },
  ItemUser: {
    screen: ItemUser,
  }
});

export default StackUser;