import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from '../../helpers/components';
import { translate } from '../../helpers/translation';
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

const Footer = props => {
    const { language: code } = props;
    return (
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
                                <Typography variant="h6">
                                    {translate('Call Us!', code)}
                                </Typography>
                                <Typography style={{ color: '#bdc3c7' }}>
                                    613-562-5800 ext. 6196
                                </Typography>
                            </section>
                        </Grid>
                        <Grid xs={4} item>
                            <section className="column">
                                <Typography variant="h6">
                                    {translate('Visit Our Office', code)}
                                </Typography>
                                <Typography style={{ color: '#bdc3c7' }}>
                                    STE 4026 <br />
                                    800 King Edward Avenue
                                </Typography>
                            </section>
                        </Grid>
                        <Grid xs={4} item>
                            <section className="column">
                                <Typography variant="h6">
                                    {translate('Social Media!', code)}
                                </Typography>
                                <ul style={{ margin: '0', color: '#bdc3c7' }}>
                                    {socialMedia.map(
                                        ({ node: { link, title } }, key) => (
                                            <li key={String(key)}>
                                                <Typography>
                                                    <Link
                                                        to={link}
                                                        eventlabel={`Going to ${title} page`}
                                                        className="footer-url-txt"
                                                        style={{
                                                            color: '#bdc3c7'
                                                        }}
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
};

Footer.defaultProps = {
    language: 'EN'
};

Footer.propTypes = {
    language: PropTypes.string
};

export default Footer;
