import React from 'react';
import { Typography } from '@material-ui/core';
import Gravatar from 'react-gravatar';
import { Title, Link } from '../../helpers/components';
import { translate, getCurrentLanguage } from '../../helpers/translation';
import voteImg from '../../../static/images/events/2019-2020/vote-ieee.jpg';
import platforms from '../../data/election-ballot-2021.json';

const Platforms = () => {
    return (
        <div>
            <br />
            <h1>Applicants</h1>
            {platforms.positions.map(position => (
                <div>
                    <br />
                    <br />
                    <h2 style={{ textDecoration: 'underline' }}>
                        {position.title}
                    </h2>
                    {position.candidates.map(candidate => (
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Gravatar
                                    email={candidate.user.email}
                                    style={{ borderRadius: '50%' }}
                                />
                                <h3 style={{ padding: '1rem' }}>
                                    {candidate.user.name}
                                </h3>
                            </div>
                            {candidate.platform.split('\n').map(line => (
                                <p>{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const ElectionsEN = () => {
    // const voteUrl = 'https://forms.gle/WZfBzf49KeU2bZVv5';
    return (
        <Typography>
            <h1>IEEE Elections</h1>
            <p>
                Elections are currently live on the{' '}
                <b>
                    <a
                        href="https://democracy.smallminds.dev/election/1878a916-d33a-47a7-83fa-18ec357899ec"
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: 'inherit' }}
                    >
                        Democracy Platform
                    </a>
                </b>
            </p>
            <p>
                Nominations for the new 2021-2022 executive positions have
                opened and will end on March 18th at 12:00pm.
            </p>

            <p>
                Who can apply: Students in Computer Science, Engineering or
                Science.
            </p>

            <p>
                <b>To apply:</b>
            </p>
            <li>
                Email elections@ieeeuottawa.ca your full name, student number,
                program and year of study
            </li>
            <li>
                Submit your 200-500 word platform for the position you’re
                applying to at
                {'  '}
                <a
                    href="https://democracy.smallminds.dev/election/1878a916-d33a-47a7-83fa-18ec357899ec"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: 'inherit' }}
                >
                    democracy.smallminds.dev/election/1878a916-d33a-47a7-83fa-18ec357899ec
                </a>
            </li>
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
            <br />
            <p>
                For more information on what each of our positions entail, see
                our {'  '}
                <Link to="/constitution">constitution</Link>
            </p>
        </Typography>
    );
};

const ElectionsFR = () => {
    return (
        <Typography>
            <h1>Élections IEEE</h1>

            <p>
                Les candidatures pour les postes de l’exécutif sont maintenant
                ouvertes, et se termineront le 18 mars à 12h00.
            </p>
            <p>
                Qui peut postuler: Étudiants en Informatique, Ingénierie ou
                Science
            </p>

            <p>
                <b>Pour postuler:</b>
            </p>
            <ul>
                <li>
                    Veuillez envoyer un courriel à elections@ieeeuottawa.ca
                    contenant votre nom complet, votre numéro étudiant, votre
                    programme {"d'études"}
                    et année académique
                </li>
                <li>
                    Veuillez soumettre votre plateforme de 200~500 mots pour la
                    position à laquelle vous souhaitez vous porter candidat au
                    {'  '}
                    <a
                        href="https://democracy.smallminds.dev/election/1878a916-d33a-47a7-83fa-18ec357899ec"
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: 'inherit' }}
                    >
                        democracy.smallminds.dev/election/1878a916-d33a-47a7-83fa-18ec357899ec
                    </a>
                </li>
            </ul>

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
            <br />
            <p>
                Pour de plus amples informations sur les tâches qui incombent à
                chaque poste, veuillez consulter notre {'  '}
                <Link to="/constitution" color="inherit">
                    constitution
                </Link>
            </p>
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
            <br />
            <div
                style={{
                    padding: '8px',
                    textAlign: 'left',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontSize: '18px'
                }}
            >
                {getCurrentLanguage() === 'EN' ? (
                    <ElectionsEN />
                ) : (
                    <ElectionsFR />
                )}
                <br />
                <Platforms />
                <br />
            </div>
        </div>
    );
};

export default Elections;
