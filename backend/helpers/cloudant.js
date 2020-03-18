const Cloudant = require('@cloudant/cloudant');
const cloudant = Cloudant({ url: process.env.CLOUDANT, plugins: 'promises' });

module.exports = { cloudant };
