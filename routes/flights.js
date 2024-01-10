const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

router.get('/new', flightsCtrl.new);

// GET /flights/:id
router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

router.get('/', flightsCtrl.index);

module.exports = router;
