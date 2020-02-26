import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardMedia,
    FormControlLabel,
    IconButton,
    Typography
} from '@material-ui/core';
import Img from 'gatsby-image';
import { Title } from '../../helpers/components';

import voteImg from '../../../static/images/events/2019-2020/vote-ieee.jpg';

const voteUrl = 'https://forms.gle/WZfBzf49KeU2bZVv5';

const getVoteURL = () => {
    return (
        <a href={voteUrl} style={{ color: '#3498db' }}>
            {' '}
            {voteUrl}
        </a>
    );
};

const Elections = () => {
    return (
        <div>
            <Title variant="h5" gutterBottom className="title">
                {'Elections'}
            </Title>
            <div style={{ textAlign: 'center' }}>
                <img
                    src={voteImg}
                    alt="vote"
                    style={{
                        borderRadius: '25px',
                        height: '40%',
                        width: '40%'
                    }}
                />
            </div>
            <Typography
                variant="h5"
                style={{ paddingBottom: '8px', textAlign: 'center' }}
            >
                **Traduction Française suit** <br />
                IEEE Elections are here! <br /> <br />
                Who can apply: Anyone in Computer Science, Engineering or
                Science! <br /> <br />
                How can you apply? <br />
                At the following links: <br />
                ieeeuottawa.ca/elections <br />
                {getVoteURL()} <br /> <br />
                IEEE Elections: <br />
                Feb 26th: First day to apply for positions/nomination period
                begins <br />
                March 4th, 12pm: Nomination period ends <br />
                March 4th @ 5:30pm or 8:30pm: Mandatory candidates meeting{' '}
                <br />
                March 5th 12:00am - March 12th 11:59pm: Campaigning period{' '}
                <br />
                March 13th 12:00am - March 14th 12:00pm: Election Period! <br />{' '}
                <br />
                Positions: <br />
                -Chair(One year experience as an exec on the IEEE student
                association required) <br />
                -Vice Chair (One year experience as an exec on the IEEE student
                association required) <br />
                -Treasurer <br />
                -Secretary <br />
                -VP Academic <br />
                -VP Communications <br />
                -VP External
                <br />
                -VP Internal
                <br />
                -VP Social
                <br />
                -Webmaster
                <br />
                -McNaughton Center Director
                <br />
                -----
                <br />
                -WIE Chair
                <br />
                -WIE Vice-Chair
                <br />
                -----
                <br />
                -Photonics Chair (Grad Students Only)
                <br />
                -Photonics Vice-Chair (Grad Students Only)
                <br />
                <br />
                *****************************************************************************
                <br />
                Les Élections de l’IEEE sont arrivées!
                <br />
                <br />
                Qui peut postuler: Étudiants en Informatique, Ingénierie ou
                Science
                <br />
                <br />
                Comment postuler?
                <br />
                Aux liens suivants:
                <br />
                ieeeuottawa.ca/elections <br />
                {getVoteURL()}
                <br /> <br />
                Élections IEEE:
                <br />
                26 Févr. : Premier jour pour postuler/Période de nomination
                débute
                <br />4 Mars, 12 h : Période de nomination termine
                <br />4 Mars, @ 17 h 30 ou 20 h 30 : Réunion obligatoire des
                candidats
                <br />5 Mars, 0 h - 12 Mars, 23 h 59: Période de campagne
                <br />
                13 Mars, 0 h - 14 Mars, 12 h: Période d’élection
                <br />
                <br />
                Positions:
                <br />
                -Président (Une année d’expérience au sein de l’association
                étudiante de l’IEEE requise)
                <br />
                -Vice-Président (Une année d’expérience au sein de l’association
                étudiante de l’IEEE requise)
                <br />
                -Trésorier
                <br />
                -Secrétaire
                <br />
                -VP Académique
                <br />
                -VP Communications
                <br />
                -VP Externe
                <br />
                -VP Interne
                <br />
                -VP Social
                <br />
                -Webmaster
                <br />
                -Directeur du centre McNaughton
                <br />
                -----
                <br />
                -Présidente WIE
                <br />
                -Vice-Présidente WIE
                <br />
                -----
                <br />
                -Président de photonique (étudiants diplômés uniquement)
                <br />
                -Vice-Président de photonique (étudiants diplômés uniquement)
                <br />
                <br />
            </Typography>
        </div>
    );
};

export default Elections;
