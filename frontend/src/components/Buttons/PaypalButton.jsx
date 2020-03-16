/* eslint-disable no-console */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions/cart_actions';
import { isServerSideRendering } from '../../util';

class PaypalButton extends Component {
    constructor(props) {
        super(props);
        this.payment = this.payment.bind(this);
        this.onAuthorize = this.onAuthorize.bind(this);
    }

    onAuthorize(data, actions) {
        return actions.payment.execute().then(() => {
            const { dispatch } = this.props;
            dispatch(clearCart());
        });
    }

    payment(data, actions) {
        const { cart, total } = this.props;
        return actions.payment.create({
            transactions: [
                {
                    amount: {
                        total,
                        currency: 'CAD'
                    },
                    item_list: {
                        items: cart.map(
                            ({ name, description, price, quantity }) => {
                                console.log(
                                    'paypal qty: ',
                                    quantity - Math.floor(quantity / 3)
                                );
                                return {
                                    name,
                                    description,
                                    price: price[0].price,
                                    quantity:
                                        price.length === 1
                                            ? quantity
                                            : quantity -
                                              Math.floor(quantity / 3),
                                    currency: 'CAD'
                                };
                            }
                        )
                    }
                }
            ]
        });
    }

    render() {
        if (!isServerSideRendering()) {
            // eslint-disable-next-line global-require
            const Paypal = require('paypal-checkout');
            const PayPalButton = Paypal.Button.driver('react', {
                React,
                ReactDOM
            });
            const { env, cart, total, ...props } = this.props;
            return (
                <PayPalButton
                    {...props}
                    env={env}
                    client={{
                        sandbox: process.env.GATSBY_PAYPAL_DEV_KEY,
                        production: process.env.GATSBY_PAYPAL_PROD_KEY
                    }}
                    payment={this.payment}
                    onAuthorize={this.onAuthorize}
                    locale="en_CA"
                />
            );
        }
        return undefined;
    }
}

PaypalButton.propTypes = {
    env: PropTypes.oneOf(['sandbox', 'production']).isRequired,
    cart: PropTypes.arrayOf.isRequired,
    total: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

const paypalButton = connect()(PaypalButton);

export default paypalButton;
