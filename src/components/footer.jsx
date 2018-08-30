import React from 'react';
import Typography from '@material-ui/core/Typography';

import './footer.scss';

const socialMedia = [
  {
    link: 'https://www.facebook.com/ieeeuottawa',
    title: 'Facebook',
  },
  {
    link: 'http://www.twitter.com/ieeeuottawa',
    title: 'Twitter',
  },
  {
    link: 'http://www.instagram.com/ieeeuottawa',
    title: 'Instagram',
  },
];

const Footer = () => (
  <footer style={{
    padding: '50px 0 20px',
    overflow: 'auto',
    backgroundColor: '#1f2021',
  }}
  >
    <div style={{
      margin: '0 auto',
      maxWidth: '1100px',
    }}
    >
      <section className="column">
        <Typography variant="title">Call Us!</Typography>
        <Typography variant="caption">613-562-5800 ext. 6196</Typography>
      </section>
      <section className="column">
        <Typography variant="title">Visit Our Office!</Typography>
        <Typography variant="caption">STE 4026 <br />800 King Edward Avenue</Typography>
      </section>
      <section className="column">
        <Typography variant="title">Social Media!</Typography>
        <ul style={{ margin: '0' }}>
          {socialMedia.map(({ link, title }) => (
            <li>
              <Typography variant="caption">
                <a href={link} className="footer-url-txt">{title}</a>
              </Typography>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </footer>
);

export default Footer;

