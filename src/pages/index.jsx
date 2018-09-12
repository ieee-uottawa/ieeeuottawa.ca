import React from 'react';
import Link from 'gatsby-link';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Event from '../components/event';
import { IEEEButton } from '../components/buttons';
import ParallaxItem from '../components/parallax';
import ServiceItem from '../components/service-item';
import { FlaskIcon, LeadPencilIcon, LightBulbIcon } from '../components/icons';

import logo from '../images/uottawa_branch_logo-1.png';
import pokerAndBeer from '../images/PB.jpg';
import rickAndMorty from '../images/RickMorty.jpg';
import wineAndCheese from '../images/wine-and-cheese-1.jpg';
import mailingListImg from '../images/compsci-1.jpg';

import './index.scss';

const IndexPage = ({ width }) => {
  let gridStyle = { margin: '0 25%' };
  if (isWidthUp('lg', width, true)) {
    gridStyle = {};
  }

  return (
    <div>
      <div id="santa-pic">
        <div id="text-container" className="center">
          <Typography variant="display2" className="uppercase" id="about-us-image-text">
            <Link to="/about-us" href="/about-us" className="white-url-txt">Powering Your Student Experience</Link>
          </Typography>
          <IEEEButton
            variant="outlined"
            color="secondary"
            className="white-btn white-url-txt"
            component={Link}
            to="/about-us"
            style={{ marginTop: '32px' }}
          >
            About Us
          </IEEEButton>
        </div>
      </div>

      <Typography variant="headline" className="title">
        Why come to our office?
      </Typography>
      <Typography variant="subheading" className="center-horizontal">
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
      <ParallaxItem
        imageURL={wineAndCheese}
        messageText="Buy your ticket today!"
        buttonText="Tickets"
        buttonURL="http://celebratewie.eventbrite.ca/"
      />
      <Typography variant="headline" className="title">
        Latest Events
      </Typography>
      <GridList id="event-grid" cols={2}>
        <Event
          imageURL={pokerAndBeer}
          name="IEEE Poker & Beers – Mar. 6 at 7PM – 12AM"
          description="Love poker? Want to pretend to be James Bond for the night? Look no further! IEEE uOttawa will be hosting a poker night on March 6th. Come out to have some fun and enjoy some beers after (bar to be..."
          url="http://www.ieeeuottawa.ca/2018/03/01/ieee-poker-beers-mar-6-at-7pm-12am"
        />
        <Event
          imageURL={rickAndMorty}
          name="IEEE Trivia Night: Rick and Morty Edition – Friday, Mar. 16 at 7-10 PM"
          description="IEEE uOttawa is pleased to present Rick and Morty trivia night! Bonus points may or may not be awarded for all Pickle Rick costumes. If you missed out on our last sold out trivia night, make sure you don’t hesitate."
          url="http://www.ieeeuottawa.ca/2018/02/28/ieee-trivia-night-rick-and-morty-edition-friday-march-16-at-7-pm-10-pm"
        />
        <Event
          imageURL={wineAndCheese}
          name="9th Annual WIE Wine & Cheese – Mar. 10th, 6:30-9:30PM"
          description="TICKETS Get your tickets online or visit your IEEE student branch office to purchase with cash! Each ticket comes with a free drink ticket (remember your ID). ($7 for IEEE Students, $10 for Regular Students) uOttawa – SITE 4026 CarletonU"
          url="http://www.ieeeuottawa.ca/2018/02/27/9th-annual-wie-wine-cheese-mar-10th-630-930pm/"
        />
        <Event
          imageURL={logo}
          name="IEEE Welcome Week"
          description="Next week (Sept 11 – 15th) we’re hosting the IEEE Welcome Week which is FREE OF CHARGE, open to ALL uOttawa students and will be plenty of fun! Check out the events which will be taking place during welcome week..."
          url="http://www.ieeeuottawa.ca/2017/09/07/ieee-welcome-week/"
        />
      </GridList>
      <ParallaxItem
        imageURL={mailingListImg}
        messageText="Don't Miss Out! Join The Mailing List Today"
        buttonText="Subscribe"
        buttonURL="http://www.ieeeuottawa.ca/mailing-list-sign-up/"
      />
    </div>
  );
};

export default withWidth()(IndexPage);
