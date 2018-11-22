import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import { CloseIcon } from './icons';
import { calculatePrice, capitalize, moneyFormatter, showPricing } from '../util';

import './product-row.scss';

const ProductRow = ({ imageURL, name, options, price, quantity, handleDeleteClick, width }) => {
  let horizontalCellClass = 'hide-border';
  if (isWidthDown('xs', width)) horizontalCellClass += ' center-horizontal';

  return (
    <Grid container alignItems="center" style={{ padding: '16px 0' }}>
      <Grid item xs={6} sm={3} className="hide-border" style={{ display: 'flex' }}>
        <img
          id="row-product-img"
          src={imageURL}
          alt={name}
        />
      </Grid>
      <Grid item xs={6} sm={3} className="hide-border">
        <Typography variant="h6">{name}</Typography>
        {Object.keys(options)
          .filter(key => key !== 'quantity')
          .map(key => <Typography variant="caption">{capitalize(key)}: {options[key]}</Typography>)}
      </Grid>
      <Grid container xs={12} sm={6} alignItems="center" style={{ padding: '8px 0 0' }}>
        <Grid item xs={3} sm={4} className={horizontalCellClass}>
          <Typography variant={isWidthDown('xs', width) ? 'caption' : 'body2'}>{showPricing(price, moneyFormatter)}</Typography>
        </Grid>
        <Hidden smUp><Grid item xs={1} className="center-horizontal"><Typography variant="caption">x</Typography></Grid></Hidden>
        <Grid item xs={2} sm={2} className={horizontalCellClass}><Typography variant="body2">{quantity}</Typography></Grid>
        <Grid item xs={4} sm={5} className={horizontalCellClass} style={{ flex: 1 }}>
          <Typography variant={isWidthDown('xs', width) ? 'title' : 'body2'}>{moneyFormatter.format(calculatePrice(price, quantity))}</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={2} className="hide-border center-horizontal">
            <IconButton onClick={() => handleDeleteClick()} style={{ alignSelf: 'center' }}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={6}><Button size="small" onClick={() => handleDeleteClick()}>Delete</Button></Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

ProductRow.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.shape({
    size: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
  }),
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleDeleteClick: PropTypes.func,
};

ProductRow.defaultProps = {
  handleDeleteClick: () => {
  },
  options: {},
};

export default withWidth()(ProductRow);
