import React, {Component} from 'react';
import { connect } from 'react-redux';
import {MdAddShoppingCart} from 'react-icons/md';

import api from '../../services/api';
import { ProductList } from './styles';

class Home extends Component {
  state = {
      products : [],
  }
  
  async componentDidMount(){
      const response = await api.get('products');

      this.setState({products : response.data});
  }

  handleAddProduct = product => {
      const {dispatch} = this.props;

      dispatch({
          type: 'ADD_TO_CART',
          product
      });
  }

  render(){
      const { products } = this.state;

      return (
        <ProductList>
            {products.map( product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>U${product.price}</span>
        
                    <button type="button" onClick={() => this.handleAddProduct(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />3
                            <span>ADD TO CART</span>
                        </div>
                    </button>
                </li>
            ))}
        </ProductList>
      );
  }
}

export default connect()(Home);