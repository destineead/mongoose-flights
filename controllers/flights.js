const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

function newFlight(req, res) {
  res.render('flights/new', { title: 'New Flight' });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
  await Flight.create(req.body);
  res.redirect('/flights/new');
  } catch (err) {
    console.log(err) 
    res.render('flights/new', { errorMsg: error.message });
  }
}

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
  console.log(req.params.id)
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({flight: flight._id});
  res.render('flights/show', { flight , tickets });
}