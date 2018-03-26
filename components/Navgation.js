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

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    user: User,
    product: Product,
  });

  shouldComponentUpdate(nextprops, nextState) {
    if (this.state.index != nextState.index) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
