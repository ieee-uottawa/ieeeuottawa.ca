import React from 'react';
import { Typography } from '@material-ui/core';
import { Title } from '../../helpers/components';
import { translate, getCurrentLanguage } from '../../helpers/translation';
import voteImg from '../../../static/images/events/2019-2020/vote-ieee.jpg';

const voteUrl = 'https://forms.gle/WZfBzf49KeU2bZVv5';

const getVoteURL = () => {
    return (
        <a href={voteUrl} style={{ color: '#3498db' }}>
            <s> {voteUrl}</s>
        </a>
    );
};

const ElectionsEN = () => {
    return (
        <Typography
            variant="h5"
            style={{ paddingBottom: '8px', textAlign: 'center' }}
        >
            IEEE Elections are here! <br /> <br />
            Who can apply: Anyone in Computer Science, Engineering or Science!{' '}
            <br /> <br />
            How can you apply? <br />
            At the following link: <br />
            {getVoteURL()} <br /> <br />
            <b>IEEE Elections: </b> <br />
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                Feb 26th: First day to apply for positions/nomination period
                begins
                <br />
                March 11th 12:00pm: Nomination period ends <br />
                March 11th 5:30pm or 8:30pm: Mandatory candidates meeting
                <br />
                March 16th 12:00am - March 19th 11:59pm: Campaigning period
                <br />
                March 20th 12:00am - March 21st 12:00pm: Election Period! <br />
            </div>
            <br />
            <br />
            <b>Positions: </b>
            <br />
            Chair(One year experience as an exec on the IEEE student association
            required) <br />
            Vice Chair (One year experience as an exec on the IEEE student
            association required) <br />
            Treasurer <br />
            Secretary <br />
            VP Academic <br />
            VP Communications <br />
            VP External
            <br />
            VP Internal
            <br />
            VP Social
            <br />
            Webmaster
            <br />
            McNaughton Center Director
            <br />
            -----
            <br />
            WIE Chair
            <br />
            WIE Vice-Chair
            <br />
            -----
            <br />
            Photonics Chair (Grad Students Only)
            <br />
            Photonics Vice-Chair (Grad Students Only)
            <br />
            <br />
        </Typography>
    );
};

const ElectionsFR = () => {
    return (
        <Typography
            variant="h5"
            style={{ paddingBottom: '8px', textAlign: 'center' }}
        >
            Les Élections de l’IEEE sont arrivées!
            <br />
            <br />
            Qui peut postuler: Étudiants en Informatique, Ingénierie ou Science
            <br />
            <br />
            Comment postuler?
            <br />
            Aux lien suivants:
            <br />
            {getVoteURL()}
            <br /> <br />
            <b>Élections IEEE: </b>
            <br />
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                26 Févr. : Premier jour pour postuler/Période de nomination
                débute
                <br />
                11 Mars, 12 h : Période de nomination termine
                <br />
                11 Mars, 17 h 30 ou 20 h 30 : Réunion obligatoire des candidats
                <br />
                12 Mars, 0 h - 19 Mars, 23 h 59: Période de campagne
                <br />
                20 Mars, 0 h - 21 Mars, 12 h: Période d’élection
                <br />
            </div>
            <br />
            <br />
            <b>Positions: </b>
            <br />
            Président (Une année d’expérience au sein de l’association étudiante
            de l’IEEE requise)
            <br />
            Vice-Président (Une année d’expérience au sein de l’association
            étudiante de l’IEEE requise)
            <br />
            Trésorier
            <br />
            Secrétaire
            <br />
            VP Académique
            <br />
            VP Communications
            <br />
            VP Externe
            <br />
            VP Interne
            <br />
            VP Social
            <br />
            Webmaster
            <br />
            Directeur du centre McNaughton
            <br />
            -----
            <br />
            Présidente WIE
            <br />
            Vice-Présidente WIE
            <br />
            -----
            <br />
            Président de photonique (étudiants diplômés uniquement)
            <br />
            Vice-Président de photonique (étudiants diplômés uniquement)
            <br />
            <br />
        </Typography>
    );
};

const Elections = () => {
    return (
        <div>
            <Title variant="h5" gutterBottom className="title">
                {translate('Elections')}
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
            {getCurrentLanguage() === 'EN' ? <ElectionsEN /> : <ElectionsFR />}
        </div>
    );
};

export default Elections;
