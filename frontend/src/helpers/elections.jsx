const positions = [
    'Chair',
    'Vice_Chair',
    'Treasurer',
    'VP_Social',
    'VP_Internal',
    'VP_Communications',
    'VP_Academic',
    'VP_External',
    'WIE_Chair',
    'WIE_Vice_Chair',
    'Webmaster',
    'Secretary',
    'McNaughton_Centre_Director',
    'Photonics_Chair',
    'Photonics_Vice_Chair',
];

const candidates = {
    Chair: ['Michal Ridner'],
    'Vice Chair': ['Madison Smrtka'],
    Treasurer: ['Sanat Nayar'],
    Secretary: [],
    'VP Internal': [],
    'VP Social': ['Mohit Kapur'],
    'VP Communications': ['Nicholas Morin', 'Ajay Modagi'],
    'VP Academic': ['Vlad (Vladislav Jidkov)'],
    'VP External': ['Alois Clerc', 'Ali Jafri'],
    'WIE Chair': ['Shriya Gundala'],
    'WIE Vice Chair': ['Marla Jazzar'],
    Webmaster: ['Ryan Fleck', 'Sirjan Rekhi'],
    'McNaughton Centre Director': [],
    'Photonics Chair': [],
    'Photonics Vice Chair': [],
};

const electionResults = {
    Chair: {
        'Michal Ridner': 153,
        'No confidence': 22,
        Abstain: 31,
    },
    'Vice Chair': {
        'Madison Smrtka': 147,
        'No confidence': 26,
        Abstain: 33,
    },
    Treasurer: {
        'Sanat Nayar': 149,
        'No confidence': 25,
        Abstain: 32,
    },
    'VP Social': {
        'Mohit Kapur': 146,
        'No confidence': 26,
        Abstain: 34,
    },
    'VP Communications': {
        'Nicholas Morin': 103,
        'Ajay Modagi': 48,
        'No confidence': 20,
        Abstain: 35,
    },
    'VP Academic': {
        'Vlad (Vladislav Jidkov)': 141,
        'No confidence': 26,
        Abstain: 39,
    },
    'VP External': {
        'Alois Clerc': 83,
        'Ali Jafri': 68,
        'No confidence': 20,
        Abstain: 35,
    },
    'WIE Chair': {
        'Shriya Gundala': 155,
        'No confidence': 22,
        Abstain: 29,
    },
    'WIE Vice Chair': {
        'Marla Jazzar': 154,
        'No confidence': 22,
        Abstain: 30,
    },
    Webmaster: {
        'Ryan Fleck': 88,
        'Sirjan Rekhi': 59,
        'No confidence': 15,
        Abstain: 44,
    },
};

const sortPositions = (dataJson) => {
    return Object.entries(dataJson).sort(([position1], [position2]) =>
        positions.indexOf(position1) > positions.indexOf(position2) ? 1 : -1
    );
};

export { positions, candidates, sortPositions, electionResults };
