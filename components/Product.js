import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { productsOffline } from '../db/products';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: null,
      },
    }
  }

  async componentWillMount() {
    // const saved = await productsOffline.insert(`(?, ?)`, ['Lava loça Bob Esponja', 9.5]);    
    const getProductPromise = await productsOffline.get('');
    const product = getProductPromise.item(0);
    this.setState({ product });
  }

  render() {
    return (
      <View>
        <Text>
          Produtos
        </Text>
        <Text>
          {this.state.product.name ? 
          `
            ${this.state.product.name} - R$ ${this.state.product.value}
          ` : 'carregando...'}
        </Text>
      </View>
    );
  }
}
