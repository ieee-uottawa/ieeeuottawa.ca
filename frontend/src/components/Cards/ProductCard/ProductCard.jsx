import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    TextField,
    Typography
} from '@material-ui/core';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import MaterialSelect from '../../Material/MaterialSelect';
import { addItemToCart } from '../../../redux/old/actions/cart_actions';
import { showPricing, isServerSideRendering } from '../../../utils/util';
import '../ExecCard/exec-card.scss';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.isValidForm = this.isValidForm.bind(this);
        this.state = { count: props.itemCount };
        this.state.isValidForm = this.isValidForm();
        this.handleChange = this.handleChange.bind(this);
        this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
        this.mount();
    }

    componentWillUnmount() {
        const { unsubscribe } = this.state;
        unsubscribe();
    }

    mount() {
        if (!isServerSideRendering()) {
            const { store } = this.context;
            this.state.unsubscribe = store.subscribe(() => {
                localStorage.setItem('cart', JSON.stringify(store.getState()));
            });
        }
    }

    handleChange(name) {
        return event => {
            const { target } = event;
            let { value } = target;

            value = value < 1 ? 1 : Number(event.target.value);
            if (event.target.value === '') {
                value = '';
            } else if (Number.isNaN(value)) ({ value } = event.target);
            // console.log(`value: ${value}`);
            this.setState({ [name]: value }, () => {
                this.setState({
                    isValidForm: this.isValidForm()
                });
            });
        };
    }

    isValidForm() {
        const { count } = this.state;
        const { options } = this.props;
        return (
            count > 0 &&
            (!options ||
                Object.keys(options).some(
                    option => Object.keys(this.state).indexOf(option) > -1
                ))
        );
    }

    handleAddToCartClick() {
        const {
            dispatch,
            name,
            imageURL,
            price,
            onAddToCart: addToCart
        } = this.props;
        const { count, isValidForm, unsubscribe, ...options } = this.state;

        const key = name.toLowerCase().replace(/ /g, '-');
        dispatch(addItemToCart(key, name, imageURL, price, count, options));
        if (addToCart) {
            addToCart({
                name,
                quantity: count,
                options,
                price,
                key: new Date().getTime()
            });
        }
    }

    render() {
        const { name, imageURL, price, expiry, options } = this.props;
        const { count, isValidForm } = this.state;
        return (
            <Card id="product-card">
                <CardMedia
                    id="product-img"
                    component="img"
                    title={name}
                    image={imageURL.childImageSharp.resolutions.src}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        className="center-horizontal"
                    >
                        {name}
                    </Typography>
                    <Typography component="p" className="center-horizontal">
                        {showPricing(price)}
                    </Typography>
                    {expiry && (
                        <Typography
                            component="p"
                            variant="caption"
                            className="center-horizontal"
                        >
                            LIMITED TIME! Get your {name} before{' '}
                            {dayjs(expiry).format('MMMM D')}!
                        </Typography>
                    )}
                    {options &&
                        Object.keys(options).map((key, index) => {
                            const margin =
                                index === 0 ? '16px 16px 0 0' : '16px 16px 0';
                            return (
                                <MaterialSelect
                                    style={{
                                        margin,
                                        minWidth: '72px'
                                    }}
                                    label={key.replace(/^\w/, c =>
                                        c.toUpperCase()
                                    )}
                                    items={options[key]}
                                    onChange={this.handleChange(key)}
                                    isRequired
                                />
                            );
                        })}
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
                    <Button
                        size="small"
                        disabled={!isValidForm}
                        onClick={this.handleAddToCartClick}
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

ProductCard.defaultProps = {
    dispatch: null,
    expiry: null,
    itemCount: 1,
    onAddToCart: () => {},
    options: null
};

ProductCard.propTypes = {
    dispatch: PropTypes.func,
    expiry: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
    itemCount: PropTypes.number,
    name: PropTypes.string.isRequired,
    onAddToCart: PropTypes.func,
    options: PropTypes.any,
    price: PropTypes.arrayOf(
        PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
};

ProductCard.contextTypes = {
    store: PropTypes.object
};

export default connect()(ProductCard);
