import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardMedia, CardContent, Typography, FormControlLabel, IconButton, CardActions, Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import Img from 'gatsby-image';
import dayjs from 'dayjs';

import { MaterialSelect } from './material-components';
import { addItemToCart } from '../redux/actions/cart_actions';
import { showPricing } from '../util';

import './exec-card.scss';

const ExecCard = (props) => {
  const imageStyle = {
    margin: '16px auto 0',
    borderRadius: '50%',
    width: '166px',
    maxWidth: '100%',
    height: '166px',
    display: 'block',
    webkitBorderRadius: '50%',
    webkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
  };
  const imageComponent = props.image ?
    <CardMedia component={Img} fixed={props.image.childImageSharp.fixed} title={props.name} style={imageStyle} /> :
    <CardMedia component="img" height="166" image={`http://identicon.org/?t=${props.name}&s=166`} title={props.name} style={imageStyle} />;

  const openEmail = (email) =>
    <div className="center-horizontal">
      <FormControlLabel
        control={<a target="_top" rel="noopener noreferrer" href={"mailto:" + email}>
          <IconButton color="primary"></IconButton></a>}
        label={email} labelPlacement="end"
      />
    </div>

  return (

    <Card style={{
      margin: '16px 16px',
      width: '280px',
    }}
    >
      {imageComponent}
      <CardContent>
        <Typography gutterBottom variant="h5" className="center-horizontal">{props.name}</Typography>
        <Typography component="p" className="center-horizontal">{props.position}</Typography>
        {props.email && openEmail(props.email)}
      </CardContent>
    </Card>
  );
};

ExecCard.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.object,
  position: PropTypes.string.isRequired,
  email: PropTypes.object
};


const GalleryCard = (props) => {
  const imageStyle = {
    margin: '16px auto 0',
    borderRadius: '25%',
    width: '166px',
    maxWidth: '100%',
    height: '166px',
    display: 'block',
    webkitBorderRadius: '25%',
    webkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
  };
  const imageComponent = props.image ?
    <CardMedia component={Img} fixed={props.image.childImageSharp.fixed} title={props.name} style={imageStyle} /> :
    <CardMedia component="img" height="166" image={`http://identicon.org/?t=${props.name}&s=166`} title={props.name} style={imageStyle} />;

  return (<CardContent> {imageComponent}</CardContent>);
};

GalleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.object,
  position: PropTypes.string.isRequired,
};

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.isValidForm = this.isValidForm.bind(this);

    this.state = {
      count: props.itemCount,
    };
    this.state.isValidForm = this.isValidForm();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  componentDidMount() {
    const { store } = this.context;
    this.state.unsubscribe = store.subscribe(() => {
      localStorage.setItem('cart', JSON.stringify(store.getState()));
    });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  handleChange(name) {
    return (event) => {
      let value = event.target.value;

      value = value < 1 ? 1 : Number(event.target.value);
      if (event.target.value === '') {
        value = '';
      } else if (isNaN(value)) ({ value } = event.target);
      console.log(`value: ${value}`);
      this.setState({ [name]: value }, () => {
        this.setState({
          isValidForm: this.isValidForm(),
        });
      });
    };
  }

  isValidForm() {
    return this.state.count > 0 && (!this.props.options || Object.keys(this.props.options)
      .some(option => Object.keys(this.state)
        .indexOf(option) > -1));
  }

  handleAddToCartClick() {
    // eslint-disable-next-line react/prop-types
    const { dispatch, name, imageURL, price, onAddToCart: addToCart } = this.props;
    const { count, isValidForm, unsubscribe, ...options } = this.state;


    const key = name.toLowerCase().replace(/ /g, '-');
    dispatch(addItemToCart(key, name, imageURL, price, count, options));
    if (addToCart) {
      addToCart({
        name,
        quantity: count,
        options,
        price,
        key: new Date().getTime(),
      });
    }
  }

  render() {
    const { name, imageURL, price, expiry, options } = this.props;
    const { count, isValidForm } = this.state;
    return (
      <Card id="product-card">
        <CardMedia id="product-img" component="img" title={name} image={imageURL.childImageSharp.resolutions.src} />
        <CardContent>
          <Typography gutterBottom variant="h5" className="center-horizontal">{name}</Typography>
          <Typography component="p" className="center-horizontal">{showPricing(price)}</Typography>
          {expiry && <Typography component="p" variant="caption" className="center-horizontal">
            LIMITED TIME! Get your {name} before {dayjs(expiry)
              .format('MMMM D')}!
          </Typography>}
          {
            options && Object.keys(options)
              .map((key, index) => {
                const margin = index === 0 ? '16px 16px 0 0' : '16px 16px 0';
                return (
                  <MaterialSelect
                    style={{
                      margin,
                      minWidth: '72px',
                    }}
                    label={key.replace(/^\w/, c => c.toUpperCase())}
                    items={options[key]}
                    onChange={this.handleChange(key)}
                    isRequired
                  />
                );
              })
          }
        </CardContent>
        <CardActions>
          <TextField
            id="product-count"
            value={count}
            onChange={this.handleChange('count')}
            type="number"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <span style={{ flexGrow: 1 }} />
          <Button size="small" disabled={!isValidForm} onClick={this.handleAddToCartClick}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  price: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  expiry: PropTypes.string,
  itemCount: PropTypes.number,
  options: PropTypes.any,
  onAddToCart: PropTypes.function,
};

ProductCard.defaultProps = {
  itemCount: 1,
  options: null,
  imageHeight: '166px',
  onAddToCart: () => {
  },
};

ProductCard.contextTypes = {
  store: PropTypes.object,
};

const productCard = connect()(ProductCard);

export { ExecCard, GalleryCard, productCard as ProductCard };

