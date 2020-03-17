const express = require('express');
const router = express.Router();

const { cloudant } = require('../helpers/cloudant');

const voteDb = cloudant.db.use('vote-2020-2021');

router.get('/', (req, res, next) => {
  //   res.send('Test Vote API calls!');
  res.status(200).send({ result: 'Vote API Connection' });
});

router.get('/voted', (req, res, next) => {
  const { email } = req.query;
  voteDb.get('elections-voted').then(responseDoc => {
    const students = new Set(responseDoc.students);
    console.log(email, students);
    if (students.has(email)) {
      res.status(200).send({ result: true });
    } else {
      res.status(200).send({ result: false });
    }
  });
});

router.post('/', (req, res, next) => {
  const { form, email } = req.body;
  if (!form || !email) return;
  const doc = { form };
  // Single Entry
  voteDb.insert(doc);
  // Updates Overall Election Results
  updateRecords(form);
  // Add current user to voted list
  addToVotedList(email);
  res.status(200).send({ result: 'Voting completed' });
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
