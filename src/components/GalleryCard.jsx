import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, CardContent } from '@material-ui/core';
import Img from 'gatsby-image';
import './exec-card.scss';

const GalleryCard = props => {
  const imageStyle = {
    margin: '16px auto 0',
    borderRadius: '25%',
    width: '166px',
    maxWidth: '100%',
    height: '166px',
    display: 'block',
    webkitBorderRadius: '25%',
    webkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)'
  };
  const { image, name } = props;
  const imageComponent = image ? (
    <CardMedia
      component={Img}
      fixed={image.childImageSharp.fixed}
      title={name}
      style={imageStyle}
    />
  ) : (
    <CardMedia
      component="img"
      height="166"
      image={`http://identicon.org/?t=${name}&s=166`}
      title={name}
      style={imageStyle}
    />
  );

  return <CardContent> {imageComponent}</CardContent>;
};

GalleryCard.defaultProps = {
    image: null,
  };

GalleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default GalleryCard;
