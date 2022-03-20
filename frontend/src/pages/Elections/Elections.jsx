import React from 'react';
// import { Typography } from '@material-ui/core';
// import Gravatar from 'react-gravatar';
import { Title, Link } from '../../helpers/components';
import { translate, getCurrentLanguage } from '../../helpers/translation';
import voteImg from '../../../static/images/events/2019-2020/vote-ieee.jpg';
// import platforms from '../../data/election-ballot-2021.json';

// const Platforms = () => {
//     return (
//         <div>
//             <br />
//             <h1>Applicants</h1>
//             {platforms.positions.map(position => (
//                 <div key={position.id}>
//                     <br />
//                     <br />
//                     <h2 style={{ textDecoration: 'underline' }}>
//                         {position.title}
//                     </h2>
//                     {position.candidates.map(candidate => (
//                         <div key={candidate.id}>
//                             <div
//                                 style={{
//                                     display: 'flex',
//                                     alignItems: 'center'
//                                 }}
//                             >
//                                 <Gravatar
//                                     email={candidate.user.email}
//                                     style={{ borderRadius: '50%' }}
//                                 />
//                                 <h3 style={{ padding: '1rem' }}>
//                                     {candidate.user.name}
//                                 </h3>
//                             </div>
//                             {candidate.platform.split('\n').map(line => (
//                                 <p>{line}</p>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

const ElectionsEN = () => {
    // const voteUrl = 'https://forms.gle/WZfBzf49KeU2bZVv5';
    return (
        <div>
            <h1>IEEE Elections</h1>

            {/* <div className="condense-paragraphs">
                <p>
                    Thank you all for voting in the 2022-2023 IEEE Student
                    Branch elections! You can find the results of the elections
                    below:
                </p>
                <br />
                <p>Chair:</p>
                <p>Vlad Jidkov: 84</p>
                <p>Abstain: 17</p>
                <p>No Confidence: 3</p>
                <br />
                <p>Vice Chair:</p>
                <p>Madison Smrtka : 46</p>
                <p>Mohit Kapur: 25</p>
                <p>Abstain: 28</p>
                <p>No Confidence: 5</p>
                <br />
                <p>Treasurer:</p>
                <p>Benjamin Flynn: 43</p>
                <p>Sanat Nayar: 41</p>
                <p>Abstain: 19</p>
                <p>No Confidence: 1</p>
                <br />
                <p>VP Academic:</p>
                <p>Rikki Romana: 87</p>
                <p>Abstain: 12</p>
                <p>No Confidence: 5</p>
                <br />
                <p>VP Communications:</p>
                <p>Alae Boufarrachene: 52</p>
                <p>Pavly Saleh: 28</p>
                <p>Abstain: 21</p>
                <p>No Confidence: 3</p>
                <br />
                <p>VP Internal:</p>
                <p>Steven Li: 86</p>
                <p>Abstain: 14</p>
                <p>No Confidence: 4</p>
                <br />
                <p>VP Social:</p>
                <p>Ali Jafri: 77</p>
                <p>Abstain: 22</p>
                <p>No Confidence: 5</p>
                <br />
                <p>Webmaster:</p>
                <p>Jean Loic Kandikandi: 89</p>
                <p>Abstain: 13</p>
                <p>No Confidence: 2</p>
                <br />
                <p>McNaughton Center Director:</p>
                <p>Rafi Biouss: 47</p>
                <p>Alex Vandici: 28</p>
                <p>Abstain: 25</p>
                <p>No Confidence: 4</p>
                <br />
                <p>Photonics Chair:</p>
                <p>Khaled Atia: 77</p>
                <p>Abstain: 22</p>
                <p>No Confidence: 5</p>
                <br />
                <p>Congratulations to all the candidates!</p>
                <br />
                <p>
                    If you&rsquo;re looking to get involved in the IEEE Student
                    Branch stay tuned to our facebook page as information about
                    by-elections will be coming up in the next few days.
                </p>
            </div> */}

            {/* <p>
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
                Nominations for the new 2022-2023 executive positions are in and
                the campaigning period has started. Elections will take place
                from <b>March 27th 12:00am - March 28th 12:00pm!</b>
            </p> */}
            <p>
                Nominations for the new 2022-2023 executive positions have
                opened and will end on March 24th at 11:59pm.
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
                applying for at
                {'  '}
                <a
                    href="https://democracy.smallminds.dev/election/1878a916-d33a-47a7-83fa-18ec357899ec"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    democracy.smallminds.dev
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
        </div>
    );
};

const ElectionsFR = () => {
    return (
        <div>
            <h1>Élections IEEE</h1>

            {/* <div className="condense-paragraphs">
                <p>
                    Un grand merci &agrave; tous d&#39;avoir vot&eacute; lors
                    des &eacute;lections de la branche &eacute;tudiante de
                    l&#39;IEEE! Vous pouvez trouver les r&eacute;sultats des
                    &eacute;lections ci-dessous:
                </p>
                <br />
                <p>Pr&eacute;sident(e):</p>
                <p>Vlad Jidkov: 84</p>
                <p>Abstention: 17</p>
                <p>Censure: 3</p>
                <br />
                <p>Vice-Pr&eacute;sident(e):</p>
                <p>Madison Smrtka : 46</p>
                <p>Mohit Kapur: 25</p>
                <p>Abstention: 28</p>
                <p>Censure: 5</p>
                <br />
                <p>Tr&eacute;sorier:</p>
                <p>Benjamin Flynn: 43</p>
                <p>Sanat Nayar: 41</p>
                <p>Abstention: 19</p>
                <p>Censure: 1</p>
                <br />
                <p>VP Acad&eacute;mique:</p>
                <p>Rikki Romana: 87</p>
                <p>Abstention: 12</p>
                <p>Censure: 5</p>
                <br />
                <p>VP Communications:</p>
                <p>Alae Boufarrachene: 52</p>
                <p>Pavly Saleh: 28</p>
                <p>Abstention: 21</p>
                <p>Censure: 3</p>
                <br />
                <p>VP Interne:</p>
                <p>Steven Li: 86</p>
                <p>Abstention: 14</p>
                <p>Censure: 4</p>
                <br />
                <p>VP Social:</p>
                <p>Ali Jafri: 77</p>
                <p>Abstention: 22</p>
                <p>Censure: 5</p>
                <br />
                <p>Webmaster:</p>
                <p>Jean Loic Kandikandi: 89</p>
                <p>Abstention: 13</p>
                <p>Censure: 2</p>
                <br />
                <p>Directeur du Centre McNaughton:</p>
                <p>Rafi Biouss: 47</p>
                <p>Alex Vandici: 28</p>
                <p>Abstention: 25</p>
                <p>Censure: 4</p>
                <br />
                <p>Pr&eacute;sident(e) de la Photonique:</p>
                <p>Khaled Atia: 77</p>
                <p>Abstention: 22</p>
                <p>Censure: 5</p>
                <br />
                <p>F&eacute;licitations &agrave; tous les candidats! </p>
                <br />
                <p>
                    Si vous &ecirc;tes int&eacute;ress&eacute;s &agrave; vous
                    impliquer au sein de la branche &eacute;tudiante de
                    l&#39;IEEE, veuillez consulter notre page Facebook
                    r&eacute;guli&egrave;rement &eacute;tant donn&eacute; que
                    les informations concernant les &eacute;lections partielles
                    seront partag&eacute;es dans les jours qui suivent.
                </p>
            </div> */}

            {/* <p>
                La période de soumission des candidatures pour les positions
                exécutives de l’année 2021-2021 est terminée! Il est maintenant
                temps de passer à la période des campagnes électorales. Les
                élections auront lieu du{' '}
                <b>27 mars à minuit jusqu’au 28 mars à midi!</b>
            </p> */}

            <p>
                Les candidatures pour les postes de l’exécutif sont maintenant
                ouvertes, et se termineront le 24 mars à 23h59.
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
                    programme d&apos;études et année académique
                </li>
                <li>
                    Veuillez soumettre votre plateforme de 200~500 mots pour la
                    position à laquelle vous souhaitez vous porter candidat au
                    {'  '}
                    <a
                        href="https://democracy.smallminds.dev/election/62fc7012-9a20-45f6-8ede-533e8c590cba"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        https://democracy.smallminds.dev/
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
        </div>
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
                {/* <Platforms /> */}
                <br />
            </div>
        </div>
    );
};

export default Elections;
