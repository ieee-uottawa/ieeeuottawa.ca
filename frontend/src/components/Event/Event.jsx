import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Typography, GridListTile } from '../../helpers/material-ui';
import { IEEEButton, Link, Calendar } from '../../helpers/components';
import { translate } from '../../helpers/translation';
import './event.scss';

const Event = ({ id, url, name, description, image }) => {
    return (
        <GridListTile cols={1} id='container'>
            <Link to={url} href={url} eventlabel={`Clicked ${name}`}>
                <Img fixed={image} className='event-img' />
            </Link>
            <Link to={url} href={url} eventlabel={`Clicked ${name}`}>
                <Typography variant='h5' style={{ paddingBottom: '8px' }}>
                    {name}
                </Typography>
            </Link>
            <Calendar id={id} />
            <Typography variant='subtitle1' style={{ whiteSpace: 'pre-line' }}>
                {`${description.substring(0, 250).trim()}\u2026`}
            </Typography>
            <br />
            <IEEEButton
                variant='outlined'
                color='secondary'
                component={Link}
                to={url}
                eventlabel={`Clicked ${name}`}
            >
                <Typography variant='button'>
                    {translate('Read More')}
                </Typography>
            </IEEEButton>
        </GridListTile>
    );
};

Event.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Event;
