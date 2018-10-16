import React from 'react';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
import { graphql, StaticQuery } from 'gatsby';

import Event from '../components/event';
import Link from '../components/link';
import ParallaxItem from '../components/parallax';
import ServiceItem from '../components/service-item';
import wineAndCheese from '../images/wine-and-cheese-1.jpg';
import mailingListImg from '../images/compsci-1.jpg';
import { IEEEButton } from '../components/buttons';
import { FlaskIcon, LeadPencilIcon, LightBulbIcon } from '../components/icons';

import './index.scss';

const IndexPage = ({ width }) => {
  let gridStyle = { margin: '0 25%' };
  if (isWidthUp('lg', width, true) || isWidthDown('sm', width, false)) gridStyle = {};

  return (
    <StaticQuery
      query={
        graphql`
        query {
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
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
        `
      }
      render={({ allEventsJson: { edges } }) => (
        <div>
          <div id="santa-pic">
            <div id="text-container" className="center">
              <Typography variant="h3" className="uppercase" id="about-us-image-text">
                <Link to="/execs" href="/execs" className="white-url-txt">Powering Your Student Experience</Link>
              </Typography>
              <IEEEButton
                variant="outlined"
                color="secondary"
                className="white-btn white-url-txt"
                component={Link}
                to="/execs"
                style={{ marginTop: '32px' }}
              >
                About Us
              </IEEEButton>
            </div>
          </div>

          <Typography variant="h5" className="title">
            Why come to our office?
          </Typography>
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
          <Typography variant="h5" className="title">
            Latest Events
          </Typography>
          <GridList id="event-grid" cols={2}>
            {edges.map(({ node: { id, image: { childImageSharp: { fixed: image } }, name, description, url } }) => (
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
      )}
    />
  );
};

export default withWidth()(IndexPage);
