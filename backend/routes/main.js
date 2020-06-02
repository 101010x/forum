const express = require('express');
const router = express.Router();

const mainCtrl = require('../controllers/main');

router.get('/responses/all', mainCtrl.viewResponses);
router.post('/responses/submit', mainCtrl.submitResponses);

module.exports = router;
