import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import { CloseIcon } from './icons';
import { moneyFormatter } from '../util';

import './product-row.scss';

const ProductRow = ({ imageURL, name, options: { size, colour }, price, quantity, width }) => {
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
        <Typography variant="title">{name}</Typography>
        <Typography variant="caption">Size: {size}</Typography>
        <Typography variant="caption">Colour: {colour}</Typography>
      </Grid>
      <Grid container xs={12} sm={6} alignItems="center" style={{ padding: '8px 0 0' }}>
        <Grid item xs={3} sm={4} className={horizontalCellClass}>
          <Typography variant="caption">{moneyFormatter.format(price)}</Typography>
        </Grid>
        <Hidden smUp><Grid item xs={1} className="center-horizontal"><Typography variant="caption">x</Typography></Grid></Hidden>
        <Grid item xs={3} sm={2} className={horizontalCellClass}><Typography variant="body2">{quantity}</Typography></Grid>
        <Grid item xs={3} sm={5} className={horizontalCellClass} style={{ flex: 1 }}>
          <Typography variant="title">{moneyFormatter.format(price * quantity)}</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={2} className="hide-border center-horizontal">
            <IconButton style={{ alignSelf: 'center' }}>
              <CloseIcon />
            </IconButton>
          </Grid>
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
  }).isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default withWidth()(ProductRow);

