import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';

import Link from './link';

import './footer.scss';

const Footer = () => (
  <StaticQuery
    query={
      graphql`
      query {
        allSocialMediaJson {
          edges {
            node {
              link
              title
            }
          }
        }
      }
    `
    }
    render={({ allSocialMediaJson: { edges: socialMedia } }) => (
      <footer style={{
        padding: '50px 0 20px',
        overflow: 'auto',
        backgroundColor: '#1f2021',
        flexShrink: '0',
        height: '250px',
      }}
      >
        <Grid
          container
          style={{
            margin: '0 auto',
            maxWidth: '1100px',
          }}
        >
          <Grid xs={4}>
            <section className="column">
              <Typography variant="h6">Call Us!</Typography>
              <Typography variant="caption">613-562-5800 ext. 6196</Typography>
            </section>
          </Grid>
          <Grid xs={4}>
            <section className="column">
              <Typography variant="h6">Visit Our Office!</Typography>
              <Typography variant="caption">STE 4026 <br />800 King Edward Avenue</Typography>
            </section>
          </Grid>
          <Grid xs={4}>
            <section className="column">
              <Typography variant="h6">Social Media!</Typography>
              <ul style={{ margin: '0' }}>
                {socialMedia.map(({ node: { link, title } }) => (
                  <li>
                    <Typography variant="caption">
                      <Link to={link} eventLabel={`Going to ${title} page`} className="footer-url-txt">{title}</Link>
                    </Typography>
                  </li>
                ))}
              </ul>
            </section>
          </Grid>
          <Grid xs={12} className="center-horizontal">
            <Typography variant="caption" id="copyright-txt">
              Copyright ©
              {` ${new Date().getFullYear()}`}
              {' '}
              <Link to="/" id="copyright-link">IEEE uOttawa Student Branch</Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </footer>
    )}
  />
);

export default Footer;
