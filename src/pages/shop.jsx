import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import { ProductCard } from '../components/cards';

import crewneck from '../images/ieeebluecrewneck.png';
import hoodie from '../images/ieeebluehoodie.png';
import tshirt from '../images/ieeebluetshirt-1.png';
import patch from '../images/ieeepatch.png';

import '../components/product-card.scss';

const products = [
  {
    name: 'Crewneck',
    price: 28,
    image: crewneck,
    options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      colour: ['Black', 'Blue', 'Maroon'],
    },
  },
  {
    name: 'Hoodie',
    price: 35,
    image: hoodie,
    options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      colour: ['Black', 'Blue', 'Maroon'],
    },
  },
  {
    name: 'T-Shirt',
    price: 12,
    image: tshirt,
    options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      colour: ['Black', 'Blue', 'Maroon'],
    },
  },
  {
    name: 'Patch',
    price: 3,
    image: patch,
    imageHeight: 'auto',
  },
];

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = { itemCount: 0 };
  }

  render() {
    const { itemCount } = this.state;
    return (
      <div style={{
        marginLeft: '16px',
        marginRight: '16px',
      }}
      >
        <Typography variant="headline">Shop</Typography>
        <GridList style={{ justifyContent: 'space-evenly' }}>
          {products.map(({ name, price, image, imageHeight, options }) => (
            <GridListTile style={{
              width: 'inherit',
              height: 'inherit',
              padding: 'inherit',
              flexDirection: 'column',
              alignSelf: 'center',
            }}
            >
              <ProductCard
                price={price}
                name={name}
                imageURL={image}
                imageHeight={imageHeight}
                options={options}
                itemCount={itemCount}
                onChange={({ target: { value } }) => { if (value) this.setState({ itemCount: Number(value) }); }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Shop;

