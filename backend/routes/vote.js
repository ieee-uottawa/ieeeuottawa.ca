const express = require('express');
const router = express.Router();

const { cloudant } = require('../helpers/cloudant');
const { handleSuccess } = require('../helpers/payload');

const { verifyToken } = require('../middleware/auth');
const { canVote } = require('../middleware/canVote');

const voteDb = cloudant.db.use('vote-2020-2021');

router.get('/', (req, res, next) => {
    const results = 'Vote API Connection';
    return handleSuccess(res, `Success`, { result: results });
});

router.get('/results', (req, res, next) => {
    voteDb
        .get('election-results')
        .then(responseDoc => {
            const results = responseDoc.candidates;
            return handleSuccess(res, `Success`, { result: results });
        })
        .catch(error => {
            return handleSuccess(res, `Error`, { result: error });
        });
});

router.post('/', verifyToken, canVote, async (req, res, next) => {
    const email = req.user;
    const { form } = req.body;
    if (!form || typeof form !== 'object') return res.status(400).send(null);
    const doc = { form };

    const { candidates } = await voteDb.get('election-results');
    for (const [position, candidate] of Object.entries(form)) {
        if (candidate === 'Abstain' || candidate === 'No confidence') {
            continue;
        }

        if (candidates[position][candidate] === undefined) {
            return res.status(400).send(null);
        }
    }

    voteDb.insert(doc);
    updateRecords(form);
    addToVotedList(email);
    return handleSuccess(res, `Success`, { result: true });
});

function addToVotedList(email) {
    voteDb.get('elections-voted').then(responseDoc => {
        const students = responseDoc.students;
        students.push(email);
        voteDb.insert(responseDoc);
    });
}

function updateRecords(form) {
    voteDb
        .get('election-results')
        .then(responseDoc => {
            const currentResults = responseDoc.candidates;
            const positions = Object.keys(form);
            for (const position of positions) {
                const candidate = form[position];
                // If position doesn't exist
                if (!(position in currentResults))
                    currentResults[position] = {};
                // If candidate doesn't exist
                if (!(candidate in currentResults[position]))
                    currentResults[position][candidate] = 0;
                // Updates Counter
                currentResults[position][candidate] += 1;
            }
            voteDb.insert(responseDoc);
        })
        .catch(error => {
            console.log('Form Error:', error);
        });
}

module.exports = router;
