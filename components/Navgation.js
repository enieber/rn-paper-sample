import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Product from './product';
import User from './user';

export default class Navgation extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'user', title: 'Usuarios', icon: 'people' },
      { key: 'product', title: 'Produtos', icon: 'store' },
    ],
  };

  _renderScene = BottomNavigation.SceneMap({
    user: User,
    product: Product,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={(index) => this.setState({ index })}
        renderScene={this._renderScene}
      />
    );
  }
}
