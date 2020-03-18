import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import ProductRow from '../ProductRow/ProductRow';
import PaypalButton from '../Buttons/PaypalButton';
import {
    calculatePrice,
    capitalize,
    flattenDeep,
    isDevEnvironment,
    moneyFormatter,
    isServerSideRendering
} from '../../utils/util';
import { removeItemFromCart } from '../../redux/actions/cart_actions';
import Title from '../Titles/Title';

import sadEmoji from '../../../static/images/emoji_sad.svg';
import './cart.scss';

const optionsSum = price => (sum, { quantity }) =>
    sum + calculatePrice(price, quantity);

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };
        this.updateState = this.updateState.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.mount();
    }

    componentWillUnmount() {
        const { unsubscribe } = this.state;
        unsubscribe();
    }

    mount() {
        if (!isServerSideRendering()) {
            const { store } = this.context;
            const unsubscribe = store.subscribe(() => {
                const state = store.getState();
                this.updateState(state);
                localStorage.setItem('cart', JSON.stringify(state));
            });

            const state = JSON.parse(localStorage.getItem('cart'));
            this.updateState({ unsubscribe, ...state });
        }
    }

    updateState(state, useSetState = true) {
        if (useSetState) {
            this.setState(state);
        } else {
            this.state = {
                ...this.state,
                ...state
            };
        }
    }

    handleDelete(id, options) {
        const { dispatch } = this.props;
        dispatch(removeItemFromCart(id, options));
    }

    render() {
        const { items } = this.state;
        const total = items.reduce(
            (sum, { price, options }) =>
                sum + options.reduce(optionsSum(price), 0),
            0
        );
        const cart = flattenDeep(
            items.map(({ id, name, imageURL, price, options }) =>
                options.map(itemOptions => {
                    // console.log(itemOptions);
                    return {
                        id,
                        description: `${name} (${Object.keys(itemOptions)
                            .filter(
                                option =>
                                    price.length > 1 ||
                                    (price.length === 1 &&
                                        option !== 'quantity')
                            )
                            .map(
                                key => `${capitalize(key)}: ${itemOptions[key]}`
                            )
                            .join(', ')})`.replace(' ()', ''),
                        name,
                        imageURL: imageURL.childImageSharp.resolutions.src,
                        price,
                        options: itemOptions,
                        quantity: itemOptions.quantity
                    };
                })
            )
        );

        const cardID = cart.length > 0 ? 'cart-not-empty' : 'cart-empty';

        return (
            <div>
                <Title style={{ marginBottom: '16px' }}>Cart</Title>
                <Card id={cardID}>
                    {cart.length > 0 && (
                        <Grid container>
                            <Grid
                                container
                                lg={10}
                                md={9}
                                xs={12}
                                style={{ padding: '16px' }}
                            >
                                <Hidden xsDown>
                                    <Grid container direction="row">
                                        <Grid sm={3} />
                                        <Grid sm={3}>
                                            <Typography>Product</Typography>
                                        </Grid>
                                        <Grid sm={2}>
                                            <Typography>Price</Typography>
                                        </Grid>
                                        <Grid sm={1}>
                                            <Typography>Qty</Typography>
                                        </Grid>
                                        <Grid sm={2}>
                                            <Typography>Total</Typography>
                                        </Grid>
                                        <Grid sm={1} />
                                    </Grid>
                                </Hidden>
                                {flattenDeep(
                                    cart.map(
                                        ({
                                            id,
                                            name,
                                            imageURL,
                                            price,
                                            options,
                                            quantity
                                        }) => (
                                            <ProductRow
                                                key={`${id}-${Object.values(
                                                    options
                                                ).join('-')}`}
                                                name={name}
                                                price={price}
                                                quantity={quantity}
                                                imageURL={imageURL}
                                                options={options}
                                                handleDeleteClick={() =>
                                                    this.handleDelete(
                                                        id,
                                                        options
                                                    )
                                                }
                                            />
                                        )
                                    )
                                )}
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={3}
                                xs={12}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: total > 0 ? '0' : '32px',
                                    background: 'rgba(0, 0, 0, 0.08)'
                                }}
                            >
                                <Typography
                                    className="center-horizontal"
                                    variant="h6"
                                    style={{ margin: '32px 16px 16px' }}
                                >
                                    Cart Total
                                </Typography>
                                <Typography
                                    className="center-horizontal"
                                    variant="h4"
                                    style={{ margin: '0 16px' }}
                                >
                                    {moneyFormatter.format(total)}
                                </Typography>
                                {total > 0 && (
                                    <PaypalButton
                                        env={
                                            isDevEnvironment
                                                ? 'sandbox'
                                                : 'production'
                                        }
                                        cart={cart}
                                        total={total}
                                        style={{ margin: '32px 16px 16px' }}
                                    />
                                )}
                            </Grid>
                        </Grid>
                    )}
                    {cart.length === 0 && (
                        <div>
                            <img
                                src={sadEmoji}
                                alt="Sad emoji"
                                height="200"
                                style={{
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                            <Typography
                                className="center-horizontal"
                                variant="h4"
                            >
                                Your cart is empty
                            </Typography>
                        </div>
                    )}
                </Card>
            </div>
        );
    }
}

Cart.contextTypes = {
    // store: PropTypes.object,
};

Cart.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(Cart);
