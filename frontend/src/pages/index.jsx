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
import { translate, translateDescription } from '../helpers/translation';
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
                    FR
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

    return (
        <StaticQuery
            query={query}
            render={queryProps => {
                const {
                    allEventsJson: { edges: eventEdges },
                    allCarouselJson: { edges: carouselEdges }
                } = queryProps;

                // Get yesterday's date.
                const now = new Date();
                now.setDate(now.getDate() - 1);

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
                                                            {translate(message)}
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
                                                    {translate(button.text)}
                                                </IEEEButton>
                                            </div>
                                        </div>
                                    </BackgroundImage>
                                )
                            )}
                        </Carousel>
                        <div
                            style={{
                                background: 'black',
                                padding: '10px',
                                margin: '0px'
                            }}
                        >
                            <Typography
                                variant="h6"
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    margin: '10px'
                                }}
                            >
                                Experience the IEEE uOttawa
                                <IEEEButton
                                    variant="outlined"
                                    color="secondary"
                                    className="white-btn white-url-txt"
                                    style={{ margin: '20px 16px' }}
                                    component={Link}
                                    to="vr-campus"
                                    eventlabel="vr-campus"
                                >
                                    Virtual Campus Tour
                                </IEEEButton>
                            </Typography>
                        </div>

                        <Title style={{ margin: '32px 0 16px' }}>
                            {translate('Why come to our office?')}
                        </Title>
                        <Typography
                            variant="subtitle1"
                            className="center-horizontal"
                        >
                            {translate(
                                'Check out all the services we offer in our office!'
                            )}
                        </Typography>
                        <Grid id="services-row" container>
                            <Grid item xs={12} sm={6} lg={4}>
                                <ServiceItem
                                    icon={<FlaskIcon className="icon" />}
                                    title={translate('Purchase Lab Supplies')}
                                    body={translate(
                                        'Check out what we have for sale on our Services page, under About Us.'
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <ServiceItem
                                    icon={<LightBulbIcon className="icon" />}
                                    title={translate('Homework Help')}
                                    body={translate(
                                        'Is there a course you are struggling with? Contact the VP Academic to find out how we can help you succeed.'
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} lg={4} style={gridStyle}>
                                <ServiceItem
                                    icon={<LeadPencilIcon className="icon" />}
                                    title={translate('Study')}
                                    body={translate(
                                        'Need a chill place to study? Come make use of our library and study in the office anytime we are open.'
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Title style={{ margin: '32px 0 16px' }}>
                            {translate('Latest Events')}
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
                                        description: EN,
                                        FR,
                                        url
                                    }
                                }) => {
                                    const date_string = String(id)
                                        .split('-')
                                        .slice(0, 3)
                                        .join('-');
                                    const date = Date.parse(date_string);
                                    if (date > now) {
                                        return (
                                            <Event
                                                key={id}
                                                id={id}
                                                image={image}
                                                name={name}
                                                description={translateDescription(
                                                    EN,
                                                    FR
                                                )}
                                                url={url}
                                            />
                                        );
                                    }
                                    return null;
                                }
                            )}
                        </GridList>
                        <Parallax
                            imageURL={mailingListImg}
                            messageText={translate(
                                "Don't Miss Out! Join The Mailing List Today!"
                            )}
                            buttonText={translate('Subscribe')}
                            buttonURL="/mailing-list"
                        />
                    </div>
                );
            }}
        />
    );
};

IndexPage.propTypes = {
    width: PropTypes.any.isRequired
};

export default withWidth()(IndexPage);
