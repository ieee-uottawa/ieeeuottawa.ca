const express = require('express');
const router = express.Router();

const { cloudant } = require('../helpers/cloudant');

const { handleSuccess } = require('../helpers/payload');

const voteDb = cloudant.db.use('vote-2020-2021');

router.get('/', (req, res, next) => {
  const results = 'Vote API Connection';
  return handleSuccess(res, `Success`, { result: results });
});

router.get('/voted', (req, res, next) => {
  const { email } = req.query;
  voteDb.get('elections-voted').then(responseDoc => {
    const students = new Set(responseDoc.students);
    if (students.has(email)) {
      return handleSuccess(res, `Success`, { result: true });
    } else {
      return handleSuccess(res, `Success`, { result: false });
    }
  });
});

router.post('/', (req, res, next) => {
  const { form, email } = req.body;
  if (!form || !email) return;
  const doc = { form };
  voteDb.get('elections-voted').then(responseDoc => {
    const students = new Set(responseDoc.students);
    if (!students.has(email)) {
      voteDb.insert(doc);
      updateRecords(form);
      addToVotedList(email);
      return handleSuccess(res, `Success`, { result: true });
    } else {
      return handleSuccess(res, `Success`, { result: false });
    }
  });
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
        if (!(position in currentResults)) currentResults[position] = {};
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

// .then(response => {
//     console.log('Form Success:', response);
//   })
//   .catch(error => {
//     console.log('Form Error:', error);
//   });

module.exports = router;
