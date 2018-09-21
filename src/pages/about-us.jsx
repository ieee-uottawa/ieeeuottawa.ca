import React from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';

import { ExecCard } from '../components/cards';

const execs = [
  {
    name: 'Heemel Saha',
    position: 'Chair',
  },
  {
    name: 'Amar Jasarbasic',
    position: 'Vice Chair',
  },
  {
    name: 'Robert Conrad',
    position: 'VP Finance',
  },
  {
    name: 'John Zhao',
    position: 'VP Social',
  },
  {
    name: 'Anushka Paliwal',
    position: 'VP Internal',
  },
  {
    name: 'Caroline Faubert',
    position: 'VP Communications',
  },
  {
    name: 'Melody Habbouche',
    position: 'VP Academic',
  },
  {
    name: 'Aly Abdelrahman',
    position: 'VP External',
  },
  {
    name: 'Linda Tang',
    position: 'WIE Chair',
  },
  {
    name: 'Mikeli Habash',
    position: 'WIE Vice Chair',
  },
  {
    name: 'Rushil Perera',
    position: 'Webmaster',
  },
  {
    name: 'Michal Ridner',
    position: 'Secretary',
  },
  {
    name: 'Ivor Benderavage',
    position: 'McNaughton Centre Director',
  },
];

const AboutUs = () => (
  <div>
    <Typography variant="headline" gutterBottom className="center-horizontal">About Us</Typography>
    <p className="p-margins">
      The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official
      Sub-Association for ELG/CEG/SEG
      under the ESS.
    </p>
    <p className="p-margins">
      The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s
      experience on campus.
      This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment.
    </p>
    <p className="p-margins">*Disclaimer: The opinions and content carried by this page are those of its owners or operators, not of IEEE.</p>

    <Typography variant="title" gutterBottom className="center-horizontal">Our Execs</Typography>
    <GridList cols={5} style={{ margin: '0 7.5% 0' }}>
      {execs.map(({ name, position }) => <ExecCard name={name} position={position} />)}
    </GridList>
  </div>
);

export default AboutUs;
