import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { productsOffline } from '../../db/products';
import Product from './Product';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: null,
      },
    }
  }

  async getAllList() {
    const getProductPromise = await productsOffline.get('');
    console.log(getProductPromise);
  }

  componentDidMount() {
    // const saved = await productsOffline.insert(`(?, ?)`, ['Lava loça Bob Esponja', 9.5]);    
    // this.getAllList();
    // const product = getProductPromise.item(0);
    // this.setState({ product });
  }

  render() {    
    return (
      <FlatList
        data={[
          {
            name: 'a',
            value: 10,
          }, 
          {
            name: 'b',
            value: 15,
          }
        ]}
        renderItem={({item}) => 
        <Product
          {...item}
        />}
      />
    );
  }
}
