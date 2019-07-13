import React from 'react';
import { Grid, GridList, Typography } from '@material-ui/core';
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
import { graphql, StaticQuery } from 'gatsby';
import Carousel from 'nuka-carousel';
import BackgroundImage from 'gatsby-background-image';

import Event from '../components/event';
import Link from '../components/link';
import Title from '../components/title';
import ParallaxItem from '../components/parallax';
import ServiceItem from '../components/service-item';
import { IEEEButton } from '../components/buttons';
import { ChevronLeftIcon, ChevronRightIcon, FlaskIcon, LeadPencilIcon, LightBulbIcon } from '../components/icons';

import './index.scss';
import mailingListImg from '../../static/images/compsci-1.jpg';

const IndexPage = ({ width }) => {
  let gridStyle = { margin: '0 25%' };
  if (isWidthUp('lg', width, true) || isWidthDown('sm', width, false)) gridStyle = {};

  return (
    <StaticQuery
      query={
        graphql`
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
        `
      }
      render={({ allEventsJson: { edges: eventEdges }, allCarouselJson: { edges: carouselEdges } }) => {
        const iconStyle = {
          color: 'white',
          height: '48px',
          width: '48px',
        };
        return (
          <div style={{ marginTop: '-1em' }}>
            <Carousel
              wrapAround
              // autoplay
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              enableKeyboardControls
              swiping
              renderCenterLeftControls={({ previousSlide: goToPrevious }) => <ChevronLeftIcon onClick={goToPrevious} style={iconStyle} />}
              renderCenterRightControls={({ nextSlide: goToNext }) => <ChevronRightIcon onClick={goToNext} style={iconStyle} />}
            >
              {
                carouselEdges.map(({ node: { message, button, imageFile: { image: { childImageSharp: { fluid } }, id: imageID, style: imageStyle } } }) => (
                  <BackgroundImage className={`bg-image ${imageID}`} fluid={fluid} style={imageStyle}>
                    <div id="image-overlay">
                      <div id="text-container" className="center">
                        {message && (
                          <Typography variant="h3" className="uppercase" id="about-us-image-text">
                            <Link to={button.url} href={button.url} eventLabel={button.url} className="white-url-txt">{message}</Link>
                          </Typography>
                        )}
                        <IEEEButton
                          variant="outlined"
                          color="secondary"
                          className="white-btn white-url-txt"
                          component={Link}
                          to={button.url}
                          style={{ marginTop: '32px' }}
                        >
                          {button.text}
                        </IEEEButton>
                      </div>
                    </div>
                  </BackgroundImage>
                ))
              }
            </Carousel>

            <Title style={{ margin: '32px 0 16px' }}>Why come to our office?</Title>
            <Typography variant="subtitle1" className="center-horizontal">
              Check out all the services we offer in our office!
            </Typography>
            <Grid id="services-row" container>
              <Grid item xs={12} sm={6} lg={4}>
                <ServiceItem
                  icon={<FlaskIcon className="icon" />}
                  title="Purchase Lab Supplies"
                  body="Check out what we have for sale on our Services page, under About Us."
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
            <Title style={{ margin: '32px 0 16px' }}>Latest Events</Title>
            <GridList id="event-grid" cols={2}>
              {eventEdges.map(({ node: { id, image: { childImageSharp: { fixed: image } }, name, description, url } }) => (
                <Event
                  key={id}
                  image={image}
                  name={name}
                  description={description}
                  url={url}
                />
              ))}
            </GridList>
            <ParallaxItem
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

export default withWidth()(IndexPage);
