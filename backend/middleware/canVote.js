const { cloudant } = require('../helpers/cloudant');
const voteDb = cloudant.db.use('vote-2020-2021');

const hasEmailVoted = async (email) => {
  const responseDoc = await voteDb.get('elections-voted');
  const students = new Set(responseDoc.students);

  return students.has(email);
}

const canVote = async (req, res, next) => {
  const email = req.user;
  if (await hasEmailVoted(email)) {
    return res.status(409).send(null);
  }

  next();
};

module.exports = { hasEmailVoted, canVote };
