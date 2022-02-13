import pdf1 from '../../static/files/meeting-minutes/1. IEEE Executive Meeting Minutes (2021-09-19).pdf';
import pdf2 from '../../static/files/meeting-minutes/2. IEEE Executive Meeting Minutes (2021-10-06).pdf';
import pdf3 from '../../static/files/meeting-minutes/3. IEEE Executive Meeting Minutes (2021-10-24).pdf';
import pdf4 from '../../static/files/meeting-minutes/4. IEEE Executive Meeting Minutes (2021-11-03).pdf';
import pdf5 from '../../static/files/meeting-minutes/5. IEEE Executive Meeting Minutes (2021-11-21).pdf';
import pdf6 from '../../static/files/meeting-minutes/6. IEEE Executive Meeting Minutes (2021-12-01).pdf';
import pdf7 from '../../static/files/meeting-minutes/7. IEEE Executive Meeting Minutes (2022-01-23).pdf';
import pdf8 from '../../static/files/meeting-minutes/8. IEEE Executive Meeting Minutes (2022-02-02).pdf';
// import pdf8 from '../../static/files/meeting-minutes/5. IEEE Executive Meeting Agenda (Sept22nd).pdf';
// import pdf9 from '../../static/files/meeting-minutes/6. IEEE Meeting  Agenda (Oct 2nd).pdf';
// import pdf10 from '../../static/files/meeting-minutes/7. IEEE Meeting Agenda (October 2nd).pdf';
// import pdf11 from '../../static/files/meeting-minutes/8. IEEE Meeting Agenda (October 21st).pdf';
// import pdf12 from '../../static/files/meeting-minutes/9. IEEE Meeting Agenda (November 4th) .pdf';
// import pdfAGM from '../../static/files/meeting-minutes/IEEE AGM Meeting Agenda (Sept 23rd).pdf';

const pdfMap = {
    '1. IEEE Executive Meeting Minutes (2021-09-19).pdf': pdf1,
    '2. IEEE Executive Meeting Minutes (2021-10-06).pdf': pdf2,
    '3. IEEE Executive Meeting Minutes (2021-10-24).pdf': pdf3,
    '4. IEEE Executive Meeting Minutes (2021-11-03).pdf': pdf4,
    '5. IEEE Executive Meeting Minutes (2021-11-21).pdf': pdf5,
    '6. IEEE Executive Meeting Minutes (2021-12-01).pdf': pdf6,
    '7. IEEE Executive Meeting Minutes (2022-01-23).pdf': pdf7,
    '8. IEEE Executive Meeting Minutes (2022-02-02).pdf': pdf8
    // 'IEEE AGM Meeting Agenda (Sept 23rd).pdf': pdfAGM,
    // '6. IEEE Meeting  Agenda (Oct 2nd).pdf': pdf9,
    // '7. IEEE Meeting Agenda (October 2nd).pdf': pdf10,
    // '8. IEEE Meeting Agenda (October 21st).pdf': pdf11,
    // '9. IEEE Meeting Agenda (November 4th) .pdf': pdf12
};

const pdfs = Object.keys(pdfMap);

export { pdfs, pdfMap };
