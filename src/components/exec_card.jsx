import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './exec_card.scss';

const ExecCard = (props) => {
  const imageURL = props.imageURL || `http://identicon.org/?t=${props.name}&s=256`;
  return (
    <Card>
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

export default ExecCard;

