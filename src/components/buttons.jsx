import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import Link from './link';
import { ChevronDownIcon, ChevronUpIcon } from './icons';
import { MaterialMenu } from './material-components';
import { clearCart } from '../redux/actions/cart_actions';
import { isServerSideRendering } from '../util';

function IEEEButton(props) {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
}

IEEEButton.propTypes = {
  children: PropTypes.string.isRequired
};

function NavButton({ link, title, component: NavComponent, ...other }) {
  let linker = link;
  if (!link) linker = `/${title.toLowerCase().replace(/ /g, '-')}`;
  return (
    <NavComponent color="inherit" component={Link} to={linker} {...other}>
      {title}
    </NavComponent>
  );
}

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired
};

class NavDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick({ currentTarget }) {
    const { isOpen } = this.state;
    this.setState({
      anchorEl: currentTarget,
      isOpen: !isOpen
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
      isOpen: false
    });
  }

  render() {
    const { anchorEl, isOpen } = this.state;
    const {
      onClick,
      children,
      items,
      clickBubbleDown,
      component: DropdownComponent
    } = this.props;
    const icon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;

    return (
      <span>
        <DropdownComponent
          {...this.props}
          onClick={e => {
            if (clickBubbleDown || !onClick) this.handleClick(e);
            if (onClick) onClick(e);
          }}
        >
          {children}
          {icon}
        </DropdownComponent>
        <MaterialMenu
          anchorEl={anchorEl}
          isOpen={isOpen}
          style={{ marginTop: '40px' }}
          onClose={this.handleClose}
          items={items}
        />
      </span>
    );
  }
}

NavDropDown.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  component: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  clickBubbleDown: PropTypes.bool,
  children:PropTypes.string.isRequired
};

NavDropDown.defaultProps = {
  onClick: () => {},
  clickBubbleDown: false
};

class PaypalButton extends Component {
  constructor(props) {
    super(props);

    this.payment = this.payment.bind(this);
    this.onAuthorize = this.onAuthorize.bind(this);
  }

  onAuthorize(data, actions) {
    return actions.payment.execute().then(() => {
      this.props.dispatch(clearCart());
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
            items: cart.map(({ name, description, price, quantity }) => {
              console.log('paypal qty: ', quantity - Math.floor(quantity / 3));
              return {
                name,
                description,
                price: price[0].price,
                quantity:
                  price.length === 1
                    ? quantity
                    : quantity - Math.floor(quantity / 3),
                currency: 'CAD'
              };
            })
          }
        }
      ]
    });
  }

  render() {
    if (!isServerSideRendering()) {
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
  }
}

PaypalButton.propTypes = {
  env: PropTypes.oneOf(['sandbox', 'production']).isRequired,
  cart: PropTypes.arrayOf.isRequired,
  total: PropTypes.number.isRequired
};

const styles = theme => ({
  root: {
    '&:hover': {
      background: theme.palette.secondary.main
    }
  },
  label: {
    '& span:hover': {
      color: '#FFF !important'
    }
  }
});

const ieeeButton = withStyles(styles)(IEEEButton);
const paypalButton = connect()(PaypalButton);

export {
  ieeeButton as IEEEButton,
  NavDropDown,
  NavButton,
  paypalButton as PaypalButton
};
