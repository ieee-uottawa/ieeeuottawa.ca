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
    'Photonics_Vice_Chair'
];

const candidates = {
    Chair: ['Michal Ridner'],
    'Vice Chair': ['Madison Smrtka'],
    Treasurer: ['Sanat Nayar'],
    Secretary: [],
    'VP Internal': [],
    'VP Social': ['Mohit Kapur', 'Sheena Verana'],
    'VP Communications': ['Nicholas Morin', 'Ajay Modagi'],
    'VP Academic': ['Vlad (Vladislav Jidkov)'],
    'VP External': ['Alois Clerc', 'Ali Jafri'],
    'WIE Chair': ['Shriya Gundala'],
    'WIE Vice Chair': ['Marla Jazzar'],
    Webmaster: ['Ryan Fleck', 'Sirjan Rekhi'],
    'McNaughton Centre Director': [],
    'Photonics Chair': [],
    'Photonics Vice Chair': []
};

const sortPositions = dataJson => {
    return Object.entries(dataJson).sort(
        ([position1], [position2]) =>
            positions.indexOf(position1) > positions.indexOf(position2) ? 1 : -1
    );
};

export { positions, candidates, sortPositions };
