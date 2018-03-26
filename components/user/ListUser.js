import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { userOffline } from '../../db/users';
import User from './User';

export default class ListUser extends Component {
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
    console.log(getUserPromise);
    // const user = getUserPromise.item(0);
    // this.setState({ user });
  }

  render() {
    return(
      <FlatList
        data={[
          {
            name: 'a',
          }, 
          {
            name: 'b',
          }
        ]}
        renderItem={({item}) => 
          <User
            {...item}
          />
        }
      />
    );    
  }
}
