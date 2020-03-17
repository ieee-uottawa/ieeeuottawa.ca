const express = require('express');
const router = express.Router();

const { cloudant } = require('../helpers/cloudant');

const voteDb = cloudant.db.use('vote-2020-2021');

router.get('/', (req, res, next) => {
  res.send('Test Vote API calls!');
});

router.post('/', (req, res, next) => {
  const { form } = req.body;
  const doc = { form };
  // Single Entry
  voteDb.insert(doc);
  // Updates Overall Election Results
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
  res.send('Test Vote POST API calls!');
});

// .then(response => {
//     console.log('Form Success:', response);
//   })
//   .catch(error => {
//     console.log('Form Error:', error);
//   });

module.exports = router;
