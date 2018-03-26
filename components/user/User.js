import React, { PureComponent } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class User extends PureComponent {
  render() {
    return(
      <View>
        <Text>
          Nome
        </Text>
        <Text>{this.props.name}</Text>          
      </View>
    );    
  }
}
