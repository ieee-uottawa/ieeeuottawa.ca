/* eslint-disable max-len */
const languages = {
    home: {
        EN: 'Powering your student experience',
        FR: 'Électrifier votre expérience étudiante'
    },
    menuItems: {
        Home: {
            EN: 'Home',
            FR: 'Accueil'
        },
        Execs: {
            EN: 'Execs',
            FR: 'Directeurs'
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
    },

    parallax: {
        EN: "Don't Miss out! Join The Mailing List Today!",
        FR: "Ne manquez pas ça! Rejoignez la liste de diffusion aujourd'hui!"
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
    "Don't miss out! Join the mailing list today!": {
        EN: "Don't miss out! Join the mailing list today!",
        FR: "Ne manquez pas ça! Rejoignez la liste de diffusion aujourd'hui!"
    },
    Subscribe: { EN: 'Subscribe', FR: 'Abonnez-vous' },
    'Call Us!': { EN: 'Call Us!', FR: 'Appelez-nous!' },
    'Social Media!': { EN: 'Social Media!', FR: 'Médias sociaux!' },
    official: {
        EN:
            'The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS. The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students by giving them access to up-to-date equipment, internet access, textbooks and a quiet work environment. *Disclaimer: The opinions and content carried by this page are those of its owners or operators, not of IEEE.',
        FR:
            "La division étudiante de l'IEEE uOttawa est la division étudiante officielle de l'Université d'Ottawa et la sous-association officielle pour ELG / CEG / SEG dans le cadre de l'ESS. La section étudiante IEEE de l’Université d’Ottawa a été créée pour fournir des services professionnels afin d’améliorer l’expérience de chaque étudiant sur le campus. Nous accommodons les étudiants en leur donnant accès à un équipement à jour, un accès Internet, des manuels scolaires et un environnement de travail calme. * Avis de non-responsabilité: les opinions et le contenu véhiculés par cette page sont ceux de ses propriétaires ou opérateurs, et non ceux de l'IEEE."
    },
    'Our Execs': { EN: 'Our Execs', FR: 'Nos directeurs' },
    Events: { EN: 'Events', FR: 'Évènements' },
    Gallery: { EN: 'Gallery', FR: 'Galerie' },
    'Open Preview': { EN: 'Open Preview', FR: "Ouvrir l'aperçu" },
    'Big eng little eng': {
        EN: 'Big eng little eng',
        FR: 'Big eng little eng'
    },
    'Sign up now!': { EN: 'Sign up now!', FR: 'Inscrivez-vous maintenant!' },
    'Click here': { EN: 'Click here', FR: 'Cliquez ici' },
    redirected: {
        EN:
            'You will be redirected to _ in _ seconds. Click here to be redirected there now.',
        FR:
            'Vous serez redirigé vers _ dans _ secondes. Cliquez ici pour y être redirigé maintenant.'
    },
    'Volunteer form': { EN: 'Volunteer form', FR: 'Formulaire de bénévolat' },
    'Office Hours': { EN: 'Office Hours', FR: 'Heures de bureau' },
    'Mailing list': { EN: 'Mailing list', FR: 'Liste de diffusion' },
    Budget: { EN: 'Budget', FR: 'Budget' },
    Constitution: { EN: 'Constitution', FR: 'Constitution' },
    'IEEE Code of Conduct': {
        EN: 'IEEE Code of Conduct',
        FR: "Code de conduite de l'IEEE"
    },
    'Meeting minutes': {
        EN: 'Meeting minutes',
        FR: 'Comptes rendus des réunions'
    }
};

const translate = (key, code) => {
    if (languages[key] && languages[key][code]) return languages[key][code];
    return key;
};

export { languages, translate };
