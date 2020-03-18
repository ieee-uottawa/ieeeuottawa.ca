import { isServerSideRendering } from '../utils/util';

const menuItems = {
    Home: {
        EN: 'Home',
        FR: 'Accueil'
    },
    Execs: {
        EN: 'Execs',
        FR: 'Directeurs'
    },
    Elections: {
        EN: 'Elections',
        FR: 'Élections'
    },
    'Election Platforms': {
        EN: 'Election Platforms',
        FR: 'Plateformes'
    },
    Events: {
        EN: 'Events',
        FR: 'Évènements'
    },
    Gallery: {
        EN: 'Gallery',
        FR: 'Galerie'
    },
    WIE: {
        EN: 'WIE',
        FR: 'WIE'
    },
    Volunteer: {
        EN: 'Volunteer',
        FR: 'Bénévole'
    },
    'Contact Us': {
        EN: 'Contact Us',
        FR: 'Contactez-nous'
    },
    'About Us': {
        EN: 'About Us',
        FR: 'À notre sujet'
    }
};

const gallery = {
    'Open Preview': { EN: 'Open Preview', FR: "Ouvrir l'aperçu" }
};

const execs = {
    'Execs 2019-2020': {
        EN: 'Execs 2019-2020',
        FR: 'Directeurs 2019-2020'
    },
    'Execs 2018-2019': {
        EN: 'Execs 2018-2019',
        FR: 'Directeurs 2018-2019'
    }
};

const roles = {
    Chair: { EN: 'Chair', FR: 'Président' },
    'Vice Chair': { EN: 'Vice Chair', FR: 'Vice Président' },
    Treasurer: { EN: 'Treasurer', FR: 'Trésorier' },
    VP: { EN: 'VP', FR: 'VP' },
    'VP Social': { EN: 'VP Social', FR: 'VP Social' },
    'VP Internal': { EN: 'VP Internal', FR: 'VP Interne' },
    'VP Communications': { EN: 'VP Communications', FR: 'VP Communications' },
    'VP Academic': { EN: 'VP Academic', FR: 'VP Académique' },
    'VP External': { EN: 'VP External', FR: 'VP Externe' },
    'VP Webmaster': { EN: 'VP Webmaster', FR: 'VP Webmaster' },
    'WIE Chair': { EN: 'WIE Chair', FR: 'Présidente WIE' },
    'WIE Vice Chair': { EN: 'WIE Vice Chair', FR: 'Vice Présidente WIE' },
    Secretary: { EN: 'Secretary', FR: 'Secrétaire' },
    'McNaughton Centre Director': {
        EN: 'McNaughton Centre Director',
        FR: 'Directeur du centre McNaughton'
    },
    'Our Commissioners': { EN: 'Our Commissioners', FR: 'Nos commissaires' },
    Design: { EN: 'Design', FR: 'Design' },
    'WIE Design': { EN: 'WIE Design', FR: 'Design WIE' },
    'Translation Commissioner': {
        EN: 'Translation Commissioner',
        FR: 'Commissaire aux traductions'
    },
    'CEG Commissioner': { EN: 'CEG Commissioner', FR: 'Commissaire CEG' },
    'SEG Commissioner': { EN: 'SEG Commissioner', FR: 'Commissaire SEG' },
    'ELG Commissioner': { EN: 'ELG Commissioner', FR: 'Commissaire ELG' }
};

const languages = {
    ...menuItems,
    ...gallery,
    ...execs,
    ...roles,
    'to be redirected there now.': {
        EN: 'to be redirected there now.',
        FR: 'pour y être redirigé maintenant.'
    },
    'Powering Your Student Experience': {
        EN: 'Powering Your Student Experience',
        FR: 'Électrifier votre expérience étudiante'
    },

    'Visit Our Office': {
        EN: 'Visit Our Office',
        FR: 'Visitez notre bureau!'
    },
    'Why come to our office?': {
        EN: 'Why come to our office?',
        FR: 'Pourquoi venir à notre bureau?'
    },
    'Check out all the services we offer in our office!': {
        EN: 'Check out all the services we offer in our office!',
        FR: 'Découvrez tous les services que nous offrons dans notre bureau!'
    },
    'Purchase Lab Supplies': {
        EN: 'Purchase Lab Supplies',
        FR: 'Acheter des fournitures de lab'
    },
    'Check out what we have for sale on our Services page, under About Us.': {
        EN:
            'Check out what we have for sale on our Services page, under About Us.',
        FR:
            'Découvrez ce que nous avons à vendre sur notre page Services, sous À notre sujet.'
    },
    'Homework Help': { EN: 'Homework Help', FR: 'Aide aux devoirs' },
    'Is there a course you are struggling with? Contact the VP Academic to find out how we can help you succeed.': {
        EN:
            'Is there a course you are struggling with? Contact the VP Academic to find out how we can help you succeed.',
        FR:
            'Y a-t-il un cours avec lequel vous avez du mal? Contactez notre VP Académique pour savoir comment vous aider à réussir.'
    },
    Study: { EN: 'Study', FR: 'Étude' },
    'Need a chill place to study? Come make use of our library and study in the office anytime we are open.': {
        EN:
            'Need a chill place to study? Come make use of our library and study in the office anytime we are open.',
        FR:
            'Besoin d’un endroit relax pour étudier? Utilisez notre bibliothèque et étudiez au bureau à tous temps où nous sommes ouverts.'
    },
    'Latest Events': { EN: 'Latest Events', FR: 'Derniers évènements' },
    "Don't Miss Out! Join The Mailing List Today!": {
        EN: "Don't Miss Out! Join The Mailing List Today!",
        FR: "Ne manquez pas ça! Rejoignez la liste de diffusion aujourd'hui!"
    },
    Subscribe: { EN: 'Subscribe', FR: 'Abonnez-vous' },
    'Call Us!': { EN: 'Call Us!', FR: 'Appelez-nous!' },
    'Social Media!': { EN: 'Social Media!', FR: 'Médias sociaux!' },
    'The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS.': {
        EN:
            'The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS.',
        FR:
            "La division étudiante de l'IEEE uOttawa est la division étudiante officielle de l'Université d'Ottawa et la sous-association officielle pour ELG / CEG / SEG dans le cadre de l'ESS."
    },
    'The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment.': {
        EN:
            'The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment.',
        FR:
            'La section étudiante IEEE de l’Université d’Ottawa a été créée pour fournir des services professionnels afin d’améliorer l’expérience de chaque étudiant sur le campus. Nous accommodons les étudiants en leur donnant accès à un équipement à jour, un accès Internet, des manuels scolaires et un environnement de travail calme.'
    },
    '*Disclaimer: The opinions and content carried by this page are those of its owners or operators, not of IEEE.': {
        EN:
            '*Disclaimer: The opinions and content carried by this page are those of its owners or operators, not of IEEE.',
        FR:
            "* Avis de non-responsabilité: les opinions et le contenu véhiculés par cette page sont ceux de ses propriétaires ou opérateurs, et non ceux de l'IEEE."
    },
    'Our Execs': { EN: 'Our Execs', FR: 'Nos directeurs' },
    Events: { EN: 'Events', FR: 'Évènements' },
    'Open Preview': { EN: 'Open Preview', FR: "Ouvrir l'aperçu" },
    'Big eng little eng': {
        EN: 'Big eng little eng',
        FR: 'Big eng little eng'
    },
    'Sign Up Now!': { EN: 'Sign Up Now!', FR: 'Inscrivez-vous maintenant!' },
    'Click here': { EN: 'Click here', FR: 'Cliquez ici' },
    'Volunteer form': { EN: 'Volunteer form', FR: 'Formulaire de bénévolat' },
    'Office Hours': { EN: 'Office Hours', FR: 'Heures de bureau' },
    'Mailing List': { EN: 'Mailing List', FR: 'Liste de diffusion' },
    'Mailing List Signup Form': {
        EN: 'Mailing List Signup Form',
        FR: 'Liste de diffusion Inscrivez-vous Formulaire'
    },
    'Read More': { EN: 'Read More', FR: 'Lire la suite' },
    Budget: { EN: 'Budget', FR: 'Budget' },
    Constitution: { EN: 'Constitution', FR: 'Constitution' },
    'IEEE Code of Conduct': {
        EN: 'IEEE Code of Conduct',
        FR: "Code de conduite de l'IEEE"
    },
    'Meeting Minutes': {
        EN: 'Meeting Minutes',
        FR: 'Comptes rendus des réunions'
    },
    'Want to get involved with us?': {
        EN: 'Want to get involved with us?',
        FR: 'Vous voulez vous impliquer avec nous?'
    },
    'Get Involved!': {
        EN: 'Get Involved!',
        FR: 's’impliquer!'
    }
};

const getCurrentLanguage = () => {
    if (!isServerSideRendering())
        return localStorage.getItem('SelectedLanguage') || 'EN';
    return 'EN';
};

const getCurrentLocale = () => {
    return `${getCurrentLanguage().toLowerCase()}-ca`;
};

let code = getCurrentLanguage();

const toggleLanguage = () => {
    code = code === 'EN' ? 'FR' : 'EN';
    if (!isServerSideRendering())
        localStorage.setItem('SelectedLanguage', code);
};

const translate = key => {
    if (languages[key] && languages[key][code]) return languages[key][code];
    return key;
};

const translateRedirect = (description, seconds) => {
    const map = {
        EN: `You will be redirected to ${translate(
            description
        )} in ${seconds} seconds.`,
        FR: `Vous serez redirigé vers ${translate(
            description
        )} dans ${seconds} secondes.`
    };
    return map[code];
};

const translateDescription = (EN, FR) => {
    return getCurrentLanguage() === 'FR' ? FR : EN;
};

export {
    getCurrentLanguage,
    getCurrentLocale,
    languages,
    menuItems,
    toggleLanguage,
    translate,
    translateDescription,
    translateRedirect
};
