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
import Img from 'gatsby-image';

import { MaterialSelect } from './material-components';
import { addItemToCart } from '../redux/actions/cart_actions';

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
      </CardContent>
    </Card>
  );
};

ExecCard.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.object,
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
        this.setState({
          isValidForm: this.state.count > 0 && (!this.props.options || Object.keys(this.props.options)
            .some(option => Object.keys(this.state)
              .indexOf(option) > -1)),
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
    const { name, imageURL, price, options } = this.props;
    const { count, isValidForm } = this.state;
    return (
      <Card id="product-card">
        <CardMedia id="product-img" component="img" title={name} image={imageURL.childImageSharp.resolutions.src} />
        <CardContent>
          <Typography gutterBottom variant="h5" className="center-horizontal">{name}</Typography>
          <Typography component="p" className="center-horizontal">${price}</Typography>
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

