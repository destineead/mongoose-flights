const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');


router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

router.get('/', flightsCtrl.index);

module.exports = router;
