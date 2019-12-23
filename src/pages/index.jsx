import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import {
    Grid,
    GridList,
    Typography,
    isWidthDown,
    isWidthUp,
    withWidth
} from '../helpers/material-ui';
import { Carousel, BackgroundImage, mailingListImg } from '../helpers/theme';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    Event,
    FlaskIcon,
    IEEEButton,
    LeadPencilIcon,
    LightBulbIcon,
    Link,
    Parallax,
    ServiceItem,
    Title
} from '../helpers/components';
import { translate } from '../helpers/translation';
import './index.scss';

const query = graphql`
    query {
        allCarouselJson {
            edges {
                node {
                    message
                    button {
                        text
                        url
                    }
                    imageFile {
                        id
                        image {
                            childImageSharp {
                                fluid(maxWidth: 4160, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
        allEventsJson(limit: 4, sort: { fields: id, order: DESC }) {
            edges {
                node {
                    id
                    name
                    description
                    url
                    image {
                        childImageSharp {
                            fixed(width: 230, height: 230) {
                                ...GatsbyImageSharpFixed_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`;

const iconStyle = {
    color: 'white',
    height: '48px',
    width: '48px'
};

const IndexPage = props => {
    const { width } = props;
    let gridStyle = { margin: '0 25%' };
    if (isWidthUp('lg', width, true) || isWidthDown('sm', width, false))
        gridStyle = {};
    const { language: code } = props;
    return (
        <StaticQuery
            query={query}
            render={queryProps => {
                const {
                    allEventsJson: { edges: eventEdges },
                    allCarouselJson: { edges: carouselEdges }
                } = queryProps;

                return (
                    <div style={{ marginTop: '-1em' }}>
                        <Carousel
                            wrapAround
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            enableKeyboardControls
                            swiping
                            renderCenterLeftControls={({
                                previousSlide: goToPrevious
                            }) => (
                                <ChevronLeftIcon
                                    onClick={goToPrevious}
                                    style={iconStyle}
                                />
                            )}
                            renderCenterRightControls={({
                                nextSlide: goToNext
                            }) => (
                                <ChevronRightIcon
                                    onClick={goToNext}
                                    style={iconStyle}
                                />
                            )}
                        >
                            {carouselEdges.map(
                                (
                                    {
                                        node: {
                                            message,
                                            button,
                                            imageFile: {
                                                image: {
                                                    childImageSharp: { fluid }
                                                },
                                                id: imageID,
                                                style: imageStyle
                                            }
                                        }
                                    },
                                    key
                                ) => (
                                    <BackgroundImage
                                        key={String(key)}
                                        className={`bg-image ${imageID}`}
                                        fluid={fluid}
                                        style={imageStyle}
                                    >
                                        <div id="image-overlay">
                                            <div
                                                id="text-container"
                                                className="center"
                                            >
                                                {message && (
                                                    <Typography
                                                        variant="h3"
                                                        className="uppercase"
                                                        id="about-us-image-text"
                                                    >
                                                        <Link
                                                            to={button.url}
                                                            href={button.url}
                                                            eventlabel={
                                                                button.url
                                                            }
                                                            className="white-url-txt"
                                                        >
                                                            {message}
                                                        </Link>
                                                    </Typography>
                                                )}
                                                <IEEEButton
                                                    variant="outlined"
                                                    color="secondary"
                                                    className="white-btn white-url-txt"
                                                    component={Link}
                                                    to={button.url}
                                                    style={{
                                                        marginTop: '32px'
                                                    }}
                                                >
                                                    {button.text}
                                                </IEEEButton>
                                            </div>
                                        </div>
                                    </BackgroundImage>
                                )
                            )}
                        </Carousel>

                        <Title style={{ margin: '32px 0 16px' }}>
                            {translate('Why come to our office?', code)}
                        </Title>
                        <Typography
                            variant="subtitle1"
                            className="center-horizontal"
                        >
                            {translate(
                                'Check out all the services we offer in our office!',
                                code
                            )}
                        </Typography>
                        <Grid id="services-row" container>
                            <Grid item xs={12} sm={6} lg={4}>
                                <ServiceItem
                                    icon={<FlaskIcon className="icon" />}
                                    title={translate(
                                        'Purchase Lab Supplies',
                                        code
                                    )}
                                    body={translate(
                                        'Check out what we have for sale on our Services page, under About Us.',
                                        code
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <ServiceItem
                                    icon={<LightBulbIcon className="icon" />}
                                    title="Homework Help"
                                    body="Is there a course you are struggling with? Contact the VP Academic to find out how we can help you succeed."
                                />
                            </Grid>
                            <Grid item xs={12} lg={4} style={gridStyle}>
                                <ServiceItem
                                    icon={<LeadPencilIcon className="icon" />}
                                    title="Study"
                                    body="Need a chill place to study? Come make use of our library and study in the office anytime we are open."
                                />
                            </Grid>
                        </Grid>
                        <Title style={{ margin: '32px 0 16px' }}>
                            Latest Events
                        </Title>
                        <GridList id="event-grid" cols={2}>
                            {eventEdges.map(
                                ({
                                    node: {
                                        id,
                                        image: {
                                            childImageSharp: { fixed: image }
                                        },
                                        name,
                                        description,
                                        url
                                    }
                                }) => (
                                    <Event
                                        key={id}
                                        image={image}
                                        name={name}
                                        description={description}
                                        url={url}
                                    />
                                )
                            )}
                        </GridList>
                        <Parallax
                            imageURL={mailingListImg}
                            messageText="Don't Miss Out! Join The Mailing List Today"
                            buttonText="Subscribe"
                            buttonURL="/mailing-list-sign-up"
                        />
                    </div>
                );
            }}
        />
    );
};

IndexPage.propTypes = {
    width: PropTypes.any.isRequired,
    language: PropTypes.string.isRequired
};

export default withWidth()(IndexPage);
