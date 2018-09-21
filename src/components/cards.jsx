import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import { MaterialSelect } from './material-components';
import { addItemToCart } from '../redux/actions/cart_actions';

import './exec-card.scss';

const ExecCard = (props) => {
  const imageURL = props.imageURL || `http://identicon.org/?t=${props.name}&s=256`;
  return (
    <Card style={{
      margin: '16px 16px',
      width: '280px',
    }}
    >
      <CardMedia component="img" height="166" image={imageURL} title={props.name} id="exec-img" />
      <CardContent>
        <Typography gutterBottom variant="headline" className="center-horizontal">{props.name}</Typography>
        <Typography component="p" className="center-horizontal">{props.position}</Typography>
      </CardContent>
    </Card>
  );
};

ExecCard.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  imageURL: PropTypes.string,
  position: PropTypes.string.isRequired,
};

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.itemCount,
      isValidForm: false,
    };
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
      if (event.target.value < 1) event.target.value = 1;
      this.props.onChange(event);

      let value = Number(event.target.value);
      if (isNaN(value)) ({ value } = event.target);
      this.setState({ [name]: value }, () => {
        this.setState({ isValidForm: this.state.count > 0 && Object.keys(this.props.options)
            .some(option => Object.keys(this.state)
              .indexOf(option) > -1),
        });
      });
    };
  }

  handleAddToCartClick() {
    // eslint-disable-next-line react/prop-types
    const { dispatch, name, imageURL, price } = this.props;
    const { count, isValidForm, unsubscribe, ...options } = this.state;

    dispatch(addItemToCart(name.toLowerCase()
      .replace(/ /g, '-'), name, imageURL, price, count, options));
  }

  render() {
    const { name, imageURL, imageHeight, price, options } = this.props;
    const { count, isValidForm } = this.state;
    return (
      <Card id="product-card">
        <CardMedia id="product-img" component="img" height={imageHeight} image={imageURL} title={name} />
        <CardContent>
          <Typography gutterBottom variant="headline" className="center-horizontal">{name}</Typography>
          <Typography component="p" className="center-horizontal">${price}</Typography>
          {
            options && Object.keys(options)
              .map((key, index) => {
                const margin = index === 0 ? '16px 16px 0 0' : '16px 16px 0';
                return (
                  <MaterialSelect
                    style={{
                      margin,
                      minWidth: '64px',
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
  price: PropTypes.number.isRequired,
  itemCount: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.any,
};

ProductCard.defaultProps = {
  itemCount: 1,
  options: null,
  imageHeight: '166px',
};

ProductCard.contextTypes = {
  store: PropTypes.object,
};

const productCard = connect()(ProductCard);

export { ExecCard, productCard as ProductCard };

