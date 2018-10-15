import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Link from './link';
import { ChevronDownIcon, ChevronUpIcon } from './icons';
import { MaterialMenu } from './material-components';
import { clearCart } from '../redux/actions/cart_actions';

function IEEEButton(props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
}

function NavButton({ link, title, component: NavComponent, ...other }) {
  if (!link) {
    link = `/${title.toLowerCase()
      .replace(/ /g, '-')}`;
  }
  return <NavComponent color="inherit" component={Link} to={link} {...other}>{title}</NavComponent>;
}

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

class NavDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      anchorEl: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick({ currentTarget }) {
    this.setState({
      anchorEl: currentTarget,
      isOpen: !this.state.isOpen,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
      isOpen: false,
    });
  }

  render() {
    const { anchorEl, isOpen } = this.state;
    const { onClick, children, items, clickBubbleDown, component: DropdownComponent } = this.props;
    const icon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;

    return (
      <span>
        <DropdownComponent
          {...this.props}
          onClick={(e) => {
            if (clickBubbleDown || !onClick) this.handleClick(e);
            if (onClick) onClick(e);
          }}
        >
          {children}
          {icon}
        </DropdownComponent>
        <MaterialMenu anchorEl={anchorEl} isOpen={isOpen} onClose={this.handleClose} items={items} />
      </span>
    );
  }
}

NavDropDown.propTypes = {
  items: PropTypes.array.isRequired,
  component: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  clickBubbleDown: PropTypes.bool,
};

NavDropDown.defaultProps = {
  onClick: () => {
  },
  clickBubbleDown: false,
};

class PaypalButton extends Component {
  constructor(props) {
    super(props);

    this.payment = this.payment.bind(this);
    this.onAuthorize = this.onAuthorize.bind(this);
  }

  onAuthorize(data, actions) {
    console.log('onAuthorize', this.props);
    return actions.payment.execute()
      .then(() => {
        this.props.dispatch(clearCart());
      });
  }

  payment(data, actions) {
    const { cart, total } = this.props;
    return actions.payment.create({
      transactions: [{
        amount: {
          total,
          currency: 'CAD',
        },
        item_list: {
          items: cart.map(({ name, description, price, quantity }) => ({
            name,
            description,
            price,
            quantity,
            currency: 'CAD',
          })),
        },
      }],
    });
  }

  render() {
    if (typeof window !== 'undefined') {
      const Paypal = require('paypal-checkout');
      const PayPalButton = Paypal.Button.driver('react', {
        React,
        ReactDOM,
      });
      const { env, cart, total, ...props } = this.props;
      return (
        <PayPalButton
          {...props}
          env={env}
          client={{
            sandbox: 'AdJ-PCd6wDNtqZ0TpJhspUUdeL5j6gK_X8IQrc4SS2JT8UCjNdTKyvC8FwcsyQ2WNbfYj9IoSpY63CfJ',
            production: 'Ae0vCniajtMtUi6LOXL24iS7N8sxz8vjweJUL-wwCCEHjNXFx6Pi--GS_uyHGxWrt8WFVnV9VyDR3O7R',
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
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  label: {
    '& span:hover': {
      color: '#FFF !important',
    },
  },
});

const ieeeButton = withStyles(styles)(IEEEButton);
const paypalButton = connect()(PaypalButton);

export { ieeeButton as IEEEButton, NavDropDown, NavButton, paypalButton as PaypalButton };

