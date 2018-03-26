import { StackNavigator } from 'react-navigation';

import ListProduct from './ListProduct';
import ItemProduct from './item';

const StackProduct = StackNavigator({
  ListProduct: {
    screen: ListProduct,
  },
  ItemProduct: {
    screen: ItemProduct,
  }
});

export default StackProduct;