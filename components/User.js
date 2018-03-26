import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { userOffline } from '../db/users';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: null,
      }
    }
  }

  async componentWillMount() {
    // const saved = await userOffline.insert(`(?, ?)`, [1, 'João de Barro']);
    const getUserPromise = await userOffline.get('');
    const user = getUserPromise.item(0);
    this.setState({ user });
  }

  render() {
    return(
      <View>
        <Text>
          Nome
        </Text>
        <Text>
          {this.state.user.name ? this.state.user.name : 'carregando...'}
        </Text>          
      </View>
    );
  }
}
