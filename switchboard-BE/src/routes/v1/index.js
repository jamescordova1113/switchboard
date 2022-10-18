const express = require('express');
const contributionRoute = require('./contribution.route');

const router = express.Router();

router.use('/contributions/', contributionRoute);

module.exports = router;
