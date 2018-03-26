import React, { PureComponent } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Product extends PureComponent {
  render() {
    return (
      <View>
        <Text>{` ${this.props.name} - R$ ${this.props.value}`}</Text>
      </View>
    );
  }
}
