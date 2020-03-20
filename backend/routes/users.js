const express = require('express');
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');

const { hasEmailVoted } = require('../middleware/canVote');

const router = express.Router();

router.post('/login', async (req, res) => {
  const googleToken = req.headers.authorization;
  if (!googleToken) return res.status(401).send(null);

  const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${googleToken}`);
  if (response.ok) {
    const { hd, email, email_verified: isEmailVerified } = await response.json();
    const emailDomain = hd || email.match(/@(.+)/)[1];
    if (emailDomain !== 'uottawa.ca' || !isEmailVerified) {
      return res.status(401).send(null);
    }

    if (await hasEmailVoted(email)) {
      return res.status(409).send(null);
    }

    return res.status(200).send(jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' }));
  }

  return res.status(401).send(null);
});

module.exports = router;
