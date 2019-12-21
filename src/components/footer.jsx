import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import Link from './link';
import './footer.scss';

const query = graphql`
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
`;

const Footer = () => (
    <StaticQuery
        query={query}
        render={({ allSocialMediaJson: { edges: socialMedia } }) => (
            <footer
                style={{
                    padding: '50px 0 20px',
                    overflow: 'auto',
                    backgroundColor: '#1f2021',
                    flexShrink: '0',
                    height: '250px'
                }}
            >
                <Grid
                    container
                    style={{
                        margin: '0 auto',
                        maxWidth: '1100px'
                    }}
                >
                    <Grid xs={4} item>
                        <section className="column">
                            <Typography variant="h6">Call Us!</Typography>
                            <Typography style={{ color: '#bdc3c7' }}>
                                613-562-5800 ext. 6196
                            </Typography>
                        </section>
                    </Grid>
                    <Grid xs={4} item>
                        <section className="column">
                            <Typography variant="h6">
                                Visit Our Office!
                            </Typography>
                            <Typography style={{ color: '#bdc3c7' }}>
                                STE 4026 <br />
                                800 King Edward Avenue
                            </Typography>
                        </section>
                    </Grid>
                    <Grid xs={4} item>
                        <section className="column">
                            <Typography variant="h6">Social Media!</Typography>
                            <ul style={{ margin: '0', color: '#bdc3c7' }}>
                                {socialMedia.map(
                                    ({ node: { link, title } }, key) => (
                                        <li key={String(key)}>
                                            <Typography>
                                                <Link
                                                    to={link}
                                                    eventlabel={`Going to ${title} page`}
                                                    className="footer-url-txt"
                                                    style={{ color: '#bdc3c7' }}
                                                >
                                                    {title}
                                                </Link>
                                            </Typography>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    </Grid>
                    <Grid xs={12} className="center-horizontal" item>
                        <Typography
                            style={{ color: '#bdc3c7' }}
                            id="copyright-txt"
                        >
                            Copyright ©{` ${new Date().getFullYear()}`}{' '}
                            <Link to="/" id="copyright-link">
                                IEEE uOttawa Student Branch
                            </Link>
                            .
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        )}
    />
);

export default Footer;
