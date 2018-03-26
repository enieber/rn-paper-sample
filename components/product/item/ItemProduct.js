import React, { PureComponent } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class ItemProduct extends PureComponent {
  render() {
    return(
      <View>
        <Text>
          Produto
        </Text>
        <Text>{this.props.name}</Text>
        <Text>
          Valor
        </Text>
        <Text>{this.props.value}</Text>
      </View>
    );    
  }
}
