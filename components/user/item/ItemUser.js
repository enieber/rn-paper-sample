import React, { PureComponent } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class ItemUser extends PureComponent {
  render() {
    return(
      <View>
        <Text>
          Nome
        </Text>
        <Text>{this.props.name}</Text>
        <Text>
          Idade
        </Text>
        <Text>{this.props.age}</Text>
      </View>
    );    
  }
}
