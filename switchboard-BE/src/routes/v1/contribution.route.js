const express = require('express');
const contributionController = require('../../controllers/contribution.controller');

const router = express.Router();

router.post('/find', contributionController.find);

module.exports = router;
