import React from 'react';
import { Typography } from '@material-ui/core';
import { Title } from '../../helpers/components';
import { translate, getCurrentLanguage } from '../../helpers/translation';
import voteImg from '../../../static/images/events/2019-2020/vote-ieee.jpg';

const ElectionsEN = () => {
    // const voteUrl = 'https://forms.gle/WZfBzf49KeU2bZVv5';
    return (
        <Typography
            component="span"
            variant="h5"
            style={{
                padding: '8px',
                textAlign: 'left',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: '18px'
            }}
        >
            <h1>IEEE Elections</h1>
            <p>
                The new voting system is in development. Please check back here
                regularly for updates.
            </p>
            <p>
                Elections begin in <b>February 2021</b>.
            </p>
            <p>A link to the new platform will be posted here.</p>
            <br />
            <h2>Positions</h2>
            <ul>
                <li>
                    Chair (One year experience as an exec on the IEEE student
                    association required)
                </li>
                <li>
                    Vice Chair (One year experience as an exec on the IEEE
                    student association required)
                </li>
                <li>Treasurer</li>
                <li>Secretary</li>
                <li>VP Academic</li>
                <li>VP Communications</li>
                <li>VP External</li>
                <li>VP Internal</li>
                <li>VP Social</li>
                <li>Webmaster</li>
                <li>McNaughton Center Director</li>
            </ul>
            <br />
            <h3>WIE Positions</h3>
            <ul>
                <li>WIE Chair</li>
                <li>WIE Vice-Chair</li>
            </ul>
            <br />
            <h3>Photonics Positions</h3>
            <ul>
                <li>Photonics Chair (Grad Students Only)</li>
                <li>Photonics Vice-Chair (Grad Students Only)</li>
            </ul>
        </Typography>
    );
};

const ElectionsFR = () => {
    return (
        <Typography
            variant="h5"
            style={{
                padding: '8px',
                textAlign: 'left',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: '18px'
            }}
        >
            <h1>Élections IEEE</h1>
            <p>
                The new voting system is in development. Please check back here
                regularly for updates.
            </p>
            <p>
                Elections begin in <b>February 2021</b>.
            </p>
            <p>A link to the new platform will be posted here.</p>
            <br />
            <h2>Positions</h2>
            <ul>
                <li>
                    Président (Une année d’expérience au sein de l’association
                    étudiante de l’IEEE requise)
                </li>
                <li>
                    Vice-Président (Une année d’expérience au sein de
                    l’association étudiante de l’IEEE requise)
                </li>
                <li>Trésorier</li>
                <li>Secrétaire</li>
                <li>VP Académique</li>
                <li>VP Communications</li>
                <li>VP Externe</li>
                <li>VP Interne</li>
                <li>VP Social</li>
                <li>Webmaster</li>
                <li>Directeur du centre McNaughton</li>
            </ul>
            <br />
            <h3>WIE</h3>
            <ul>
                <li>Présidente WIE</li>
                <li>Vice-Présidente WIE</li>
            </ul>
            <br />
            <h3>Photonique</h3>
            <ul>
                <li>Président de photonique (étudiants diplômés uniquement)</li>
                <li>
                    Vice-Président de photonique (étudiants diplômés uniquement)
                </li>
            </ul>
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
