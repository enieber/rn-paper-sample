import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import {
  Provider as PaperProvider,
  BottomNavigation,
} from 'react-native-paper';

import Navigation from './components/Navgation';
import { productsOffline } from './db/products';
import { setup } from './db/db';

const uuidV4 = require('uuid/v4');
setup();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PaperProvider>
        <Navigation
        />
      </PaperProvider>
    );
  }
}
